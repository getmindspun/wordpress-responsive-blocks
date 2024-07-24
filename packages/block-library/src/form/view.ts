import apiFetch from '@wordpress/api-fetch';
import domReady from '@wordpress/dom-ready';

async function getJson(res: Response) {
    try {
        return await res.json();
    } catch {
        return new Promise(resolve => resolve({}));
    }
}

async function getSubmitError(res: Response): Promise<string> {
    try {
        const json = await res.json();
        if (json.error) {
            return json.error as string;
        }
        if (json.detail) {
            return json.detail as string;
        }
        return JSON.stringify(json);
    } catch {}
    try {
        const text = await res.text();
        if (text) {
            return text;
        }
    } catch {}
    return res.statusText ? res.statusText : 'Unknown Error';
}

async function handleJSON(form: HTMLFormElement): Promise<string|null> {
    // NOTE: only the last entry by name is kept.
    const options = {
        method: form.getAttribute('method') || 'get',
        data: Object.fromEntries(new FormData(form)),
    } as Record<string, any>;
    const action = form.getAttribute('action');
    if (action) {
        if (action.startsWith('http:') || action.startsWith('https://')) {
            options.url = action;
        } else {
            options.path = action;
        }
    }

    const res: Response = await apiFetch(options);

    if (res.status < 400) {
        form.reset();
    }

    if (res.status >= 300 && res.status < 400) {
        const location = res.headers.get('location');
        if (location) {
            window.location.href = location;
            return new Promise(resolve => resolve(null));
        }
    }

    if (res.status > 400) {
        return getSubmitError(res);
    }

    const searchParams = new URLSearchParams(window.location.search);

    const json = await getJson(res);
    for (const [key, value] of Object.entries(json)) {
        searchParams.set(key, (value as any).toString());
    }

    window.location.search = searchParams.toString();
    return new Promise(resolve => resolve(null));
}

function handleForm(form: HTMLFormElement) {
    window.addEventListener('submit', async (event) => {
        form.isInvalid = undefined;
        form.classList.remove('invalid');

        const customEvent = new CustomEvent('mrblx.submit', {detail: form});
        dispatchEvent(customEvent);

        if (form.isInvalid) {
            event.preventDefault();
            return false;
        }
        const encType = form.getAttribute('enctype');
        if (encType === 'application/json') {
            const error = await handleJSON(form);
            if (error) {
                form.querySelectorAll<HTMLElement>('.mrblx-form-error,.form-error').forEach(element => {
                    element.innerHTML = error;
                });
            }
        }

        return true;
    })
}

domReady(() => {
    document.querySelectorAll<HTMLFormElement>('.wp-block-mindspun-form').forEach(form => {
        handleForm(form);
    });
});
