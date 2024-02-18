import './LinkControl.scss';
import { TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import RelControl from './RelControl';

export type Link = {
	href: string | undefined;
	target: string | undefined;
	rel: string[];
};

export type LinkControlProps = {
	attributes: Link;
	setAttributes: (
		attributes: Partial<LinkControlProps['attributes']>
	) => void;
};

const LinkControl = (props: LinkControlProps) => {
	const rel = props.attributes.rel ? props.attributes.rel : [];
	return (
		<div className="mrblx--link-control">
			<TextControl
				label={__('Link')}
				value={props.attributes.href ? props.attributes.href : ''}
				onChange={(href) =>
					props.setAttributes({ href: href ? href : undefined })
				}
				help={__('Opens this page when clicked.')}
			/>
			<ToggleControl
				label={__('Open in new tab.')}
				checked={props.attributes.target === '_blank'}
				onChange={(isChecked) => {
					props.setAttributes({
						target: isChecked ? '_blank' : undefined,
					});
				}}
			/>
			<RelControl
				value={rel}
				onChange={(value) => {
					props.setAttributes({ rel: value });
				}}
			/>
		</div>
	);
};

export default LinkControl;
