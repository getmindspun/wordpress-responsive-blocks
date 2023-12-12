import domReady from '@wordpress/dom-ready';

const ATTR_BLOCK_ID = 'data-block-id';

function buttonTextToAnchor(buttonText: string) {
    return '#' + buttonText.trim().toLowerCase().replace(/\s+/g, '-');
}

function selectTab(blockId: string, tabs: NodeListOf<Element>, panels: NodeListOf<Element>) {
    for (const tab of tabs) {
        if (tab.getAttribute(ATTR_BLOCK_ID) === blockId) {
            tab.classList.add('wpx--tab--active');
            tab.setAttribute('aria-current', 'page');
        } else {
            tab.classList.remove('wpx--tab--active');
            tab.removeAttribute('aria-current');
        }
    }
    for (const panel of panels) {
        const id = `wpx-${blockId}`;
        if (panel.getAttribute('id') === id) {
            panel.classList.add('wpx--tab--active');
        } else {
            panel.classList.remove('wpx--tab--active');
        }
    }
}

domReady(function () {
    const blocks = document.querySelectorAll('.wp-block-mindspun-tabs');
    blocks.forEach((block) => {

        const tabs = block.querySelectorAll('.wpx--tab[data-block-id]');
        const panels = block.querySelectorAll('.wpx--tab-contents .wp-block-mindspun-tab');

        for (const tab of tabs) {
            const blockId = tab.getAttribute(ATTR_BLOCK_ID) as string;
            tab.addEventListener('click', function () {
                selectTab(blockId, tabs, panels);

                const button = tab.querySelector('button');
                if (button) {
                    const buttonText = button.textContent;
                    if (buttonText) {
                        window.location.hash = buttonTextToAnchor(buttonText);
                    }
                }
            });
        }

        // Each block watches for a hash change event.
        addEventListener('hashchange', () => {
            for (const tab of tabs) {
                if (window.location.hash) {
                    const button = tab.querySelector('button');
                    if (button) {
                        const buttonText = button.textContent;
                        if (buttonText) {
                            const anchor = buttonTextToAnchor(buttonText);
                            if (anchor === window.location.hash) {
                                button.click();
                            }
                        }
                    }
                }
            }
        });
    });
    if (window.location.hash) {
        window.dispatchEvent(new Event('hashchange'))
    }
});
