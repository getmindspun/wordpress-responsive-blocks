import classNames from 'classnames';
import { useBlockPropsWithId } from '@mindspun/mrblx';
import { Props } from './types';

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
		>
			{props.attributes.text}
		</a>
	);
}
