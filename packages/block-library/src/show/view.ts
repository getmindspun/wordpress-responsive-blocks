import domReady from '@wordpress/dom-ready';

domReady(function () {
    const blocks = document.querySelectorAll('.wp-block-mindspun-show-hide');
    blocks.forEach((block) => {
        addEventListener('mrblx.show', function (event: Event) {
            const customEvent = event as Event & {detail?: string|null}
            if (customEvent.detail) {
                const target = block.querySelector(`[data-target="${customEvent.detail}"], #${customEvent.detail}`);
                if (target) {
                    const innerBlock = block.children[0];
                    for (let i = 0; i < innerBlock.children.length; i++) {
                        innerBlock.children[i].classList.remove('mrblx--show');
                    }
                    target.classList.add('mrblx--show');
                }
            }
        });
    });
});
