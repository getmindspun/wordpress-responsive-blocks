import domReady from '@wordpress/dom-ready';
import {createRoot, createElement} from '@wordpress/element';
import FlashMessages from './FlashMessages';

async function getJson(res: Response) {
    try {
        return await res.json();
    } catch {
        return new Promise((resolve) => resolve({}));
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
    } catch {
    }

    try {
        const text = await res.text();
        if (text) {
            return text;
        }
    } catch {
    }

    return res.statusText ? res.statusText : 'Unknown Error';
}

function flash(form: HTMLFormElement, message: string, status?: string) {
    const event = new CustomEvent('mrblx.form.flash', {
        detail: {message, form, status},
    });
    window.dispatchEvent(event);
}

async function handleJSON(form: HTMLFormElement): Promise<string | null> {
    // NOTE: only the last entry by name is kept.
    const data = Object.fromEntries(new FormData(form));

    const options = {
        method: form.getAttribute('method') || 'get',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    } as Record<string, any>;

    const action = form.getAttribute('action');
    const url = action ? action : window.location.href;

    try {
        const res: Response = await fetch(url, options);

        if (res.status < 400) {
            form.reset();
        }

        if (res.status >= 300 && res.status < 400) {
            const location = res.headers.get('location');
            if (location) {
                window.location.href = location;
                return new Promise((resolve) => resolve(null));
            }
        }

        if (res.status > 400) {
            return getSubmitError(res);
        }

        const searchParams = new URLSearchParams(window.location.search);

        const json = await getJson(res);
        if (Object.keys(json).length === 0) {
            flash(form, 'Form submitted.');
        } else {
            for (const [key, value] of Object.entries(json)) {
                searchParams.set(key, (value as any).toString());
            }
            window.location.search = searchParams.toString();
        }

        return new Promise((resolve) => resolve(null));
    } catch (e) {
        return new Promise((_resolve, reject) => reject(e));
    }
}

function handleForm(form: HTMLFormElement) {
    window.addEventListener('submit', async (event) => {
        event.preventDefault();

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
                form.querySelectorAll<HTMLElement>(
                    '.mrblx-form-error,.form-error'
                ).forEach((element) => {
                    element.innerHTML = error;
                });
            }
        }

        return true;
    });

    const element = document.createElement('div');
    element.classList.add('snackbar-list');
    form.prepend(element);

    const root = createRoot(element);
    root.render(createElement(FlashMessages, {form}));
}

domReady(() => {
    document
        .querySelectorAll<HTMLFormElement>('.wp-block-mindspun-form')
        .forEach((form) => {
            handleForm(form);
        });
});
