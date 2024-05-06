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

export default function save(props: { attributes: Props['attributes'] }) {
	const variant = props.attributes.variant || 'primary';

	const blockProps = useBlockPropsWithId.save(props, {
		className: classNames(`variant-${variant}`, {
			'wp-element-button': variant !== 'link',
		}),
	});

	const rel =
		props.attributes.link.rel && props.attributes.link.rel.length > 0
			? props.attributes.link.rel.join(' ')
			: undefined;

	return (
		<a
			{...blockProps}
			href={props.attributes.link.href}
			target={props.attributes.link.target}
			rel={rel}
			// @ts-ignore
			onClick={javascript(props.attributes.customEvent)}
		>
			{props.attributes.text}
		</a>
	);
}
