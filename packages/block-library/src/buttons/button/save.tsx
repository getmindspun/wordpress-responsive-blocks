import classNames from 'classnames';
import { useBlockPropsWithId } from '@mindspun/mrblx';
import { CustomEvent, Props } from './types';

function javascript(event: CustomEvent) {
	let js = null;
	if (event && event.type) {
		if (event.detail) {
			const detail = event.detail.trim();
			js = `new CustomEvent('${event.type}',{detail:'${detail}'})`;
		} else {
			js = `new CustomEvent('${event.type}')`;
		}
	}

	if (js) {
		return `javascript:window.dispatchEvent(${js})`;
	}

	return undefined;
}

/**
 * WP automatically adds the noopener attribute to anchor tags (in most cases)
 * if the target attribute is set.
 *
 * https://github.com/WordPress/gutenberg/issues/14934
 * https://github.com/WordPress/gutenberg/issues/39051
 *
 * This behavior is controllable by a filter, so we add noopener just in case.
 * https://github.com/WordPress/WordPress/blob/2ae4784ca0aa4ba0e8e87d9c7c1c22f26b214701/wp-includes/formatting.php#L3236-L3288
 * @param attributes
 */
function rel(attributes: Props['attributes']) {
	const rels: string[] = attributes.link.rel ? [...attributes.link.rel] : [];
	if (attributes.link.target && !rels.includes('noopener')) {
		rels.push('noopener');
	}
	return rels.length ? rels.join(' ') : undefined;
}

export default function save(props: { attributes: Props['attributes'] }) {
	const variant = props.attributes.variant || 'primary';

	const blockProps = useBlockPropsWithId.save(props, {
		className: classNames(`variant-${variant}`, {
			'wp-element-button': variant !== 'link',
		}),
	});

	return (
		<a
			{...blockProps}
			href={props.attributes.link.href}
			target={props.attributes.link.target}
			rel={rel(props.attributes)}
			// @ts-ignore
			onClick={javascript(props.attributes.customEvent)}
		>
			{props.attributes.text}
		</a>
	);
}
