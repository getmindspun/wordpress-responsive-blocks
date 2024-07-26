import type { Props } from './types';

export function getClassName(props: { attributes: Props['attributes'] }) {
	return `mrblx-label-${props.attributes.labelPosition}`;
}

export function getBlockAttrsFromElement(
	element: HTMLElement,
	name: string = 'data-mrblx-attrs'
) {
	const attr = element.getAttribute(name);
	if (attr) {
		try {
			const result = JSON.parse(attr);
			element.removeAttribute(name);
			return result;
		} catch (e) {
			console.log(e); // eslint-disable-line no-console
		}
	}
	return {};
}

function isEmptyObjectOrArray(obj: any) {
	if (obj === null || obj === undefined) {
		/* Don't forget null is an object... */
		return false;
	}
	if (typeof obj === 'object' && Object.keys(obj).length === 0) {
		return true;
	}
	return Array.isArray(obj) && obj.length === 0;
}

// Sort the attributes so that the JSON always generates the same.
export function buildBlockAttrs(attributes: any) {
	const obj = {} as any;
	Object.keys(attributes)
		.sort()
		.forEach((key) => {
			const value = attributes[key];
			if (
				value !== null &&
				value !== undefined &&
				!isEmptyObjectOrArray(value)
			) {
				obj[key] = value;
			}
		});
	return JSON.stringify(obj);
}
