import React from 'react';
import { createRoot } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';

import { getBlockAttrsFromElement } from '~shared/utils';
import TextArea from './TextArea';

function handleTextArea(form: HTMLFormElement, field: HTMLTextAreaElement) {
	const props = {
		attributes: getBlockAttrsFromElement(field),
	};

	/* NB We can't hydrate here (but should).  span inside span causes hydration errors. */
	const root = createRoot(field);
	root.render(React.createElement(TextArea, props));
}

domReady(() => {
	document
		.querySelectorAll<HTMLFormElement>('.wp-block-mindspun-form')
		.forEach((form) => {
			form.querySelectorAll<HTMLTextAreaElement>(
				'.wp-block-mindspun-textarea'
			).forEach((field) => {
				handleTextArea(form, field);
			});
		});
});
