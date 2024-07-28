import React from 'react';
import { createRoot } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';

import {getBlockAttrsFromElement} from '~shared/utils';
import Field from './Field';

function handleField(form: HTMLFormElement, field: HTMLDivElement) {
	const props = {
		attributes: getBlockAttrsFromElement(field),
	};

	/* NB We can't hydrate here (but should).  span inside span causes hydration errors. */
	const root = createRoot(field);
	root.render(React.createElement(Field, props));
}

domReady(() => {
	document
		.querySelectorAll<HTMLFormElement>('.wp-block-mindspun-form')
		.forEach((form) => {
			form.querySelectorAll<HTMLDivElement>(
				'.wp-block-mindspun-field'
			).forEach((field) => {
				handleField(form, field);
			});
		});
});
