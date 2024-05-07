import domReady from '@wordpress/dom-ready';

domReady(function () {
	const blocks = document.querySelectorAll('.wp-block-mindspun-show-hide');
	blocks.forEach((block) => {
		const eventType = block.getAttribute('data-event-type') || 'mrblx.show';
		addEventListener(eventType, function (event: Event) {
			const customEvent = event as Event & { detail?: string | null };
			if (customEvent.detail) {
				const target = block.querySelector(
					`[data-target="${customEvent.detail}"], #${customEvent.detail}`
				);
				if (target) {
					const innerBlock = block.children[0];
					for (let i = 0; i < innerBlock.children.length; i++) {
						innerBlock.children[i].classList.remove('mrblx--show');
					}
					target.classList.add('mrblx--show');
				}
			}
		});

		const transitionDuration = block.getAttribute('data-transition-duration');
		if (transitionDuration) {
			block.querySelectorAll<HTMLElement>('.wp-block-mindspun-show-hide-inner').forEach((innerBlock) => {
				innerBlock.style.transitionDuration = transitionDuration;
			});
		}
	});
});
