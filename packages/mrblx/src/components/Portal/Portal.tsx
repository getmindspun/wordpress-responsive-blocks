import React from 'react';
import { createPortal } from 'react-dom';
import { useEffect, useState } from '@wordpress/element';

function createElement(
	mount: Element,
	tagName: string,
	id?: string | undefined,
	data?: Record<string, string>
) {
	const el = document.createElement(tagName) as HTMLElement;
	if (id) {
		el.setAttribute('id', id);
	}
	if (data) {
		for (const [key, value] of Object.entries(data)) {
			el.setAttribute(`data-${key}`, value);
		}
	}
	mount.append(el);
	return el;
}

const Portal = (props: {
	children: React.ReactNode;
	selector: string | undefined;
	tagName?: string | undefined;
	id?: string | undefined;
	data?: Record<string, string>;
}) => {
	const selector = props.selector ? props.selector : 'head';
	const tagName = props.tagName ? props.tagName : 'div';

	const mount = document.querySelector(selector);
	const [element, setElement] = useState<HTMLElement | null>(null);

	useEffect(() => {
		if (mount) {
			const el = createElement(mount, tagName, props.id, props.data);
			setElement(el);

			if (element) {
				element.remove();
			}

			return () => {
				if (el) {
					mount.removeChild(el);
				}
			};
		}
	}, [mount, props.data]);

	return element ? createPortal(props.children, element) : null;
};

export default Portal;
