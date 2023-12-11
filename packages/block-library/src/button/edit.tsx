import {RichText} from '@wordpress/block-editor';

import {useBlockPropsWithId, StylePortal} from '@mindspun/wpx';

import './editor.scss';
import {Props} from './types';
import Controls from './controls/Controls';
import {getClassName} from './utils';

export default function Edit(props: Props & {clientId: string}) {
	const blockProps = useBlockPropsWithId(props, {
		className: getClassName(props.attributes)
	});

	return (
		<>
			<Controls {...props} />
			<StylePortal
				blockId={props.attributes.blockId}
				attributes={props.attributes.style}
				selector={'a'}
			/>
			<div {...blockProps}>
				<RichText
					tagName={'a'}
					className={props.attributes.variant !== 'link' ? 'wp-element-button' : undefined}
					onChange={ text => {
						props.setAttributes( {text})
					}}
					value={ props.attributes.text }
					allowedFormats={ [] }
					placeholder={'Button'}
				/>
			</div>
		</>
	);
}
