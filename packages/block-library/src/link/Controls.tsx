import { Props } from './types';
import { InspectorControls } from '@wordpress/block-editor';

import { ContainerContents, LinkControl } from '@mindspun/mrblx';

const Controls = (
	props: Props & {
		onMouseEnter?: () => void;
		onMouseLeave?: () => void;
	}
) => {
	return (
		<InspectorControls>
			<div
				className={'wp-block-mindspun-link-group--controls'}
				onMouseEnter={props.onMouseEnter}
				onMouseLeave={props.onMouseLeave}
			>
				<ContainerContents>
					<LinkControl
						attributes={props.attributes.link}
						setAttributes={(link) => {
							props.setAttributes({
								link: { ...props.attributes.link, ...link },
							});
						}}
					/>
				</ContainerContents>
			</div>
		</InspectorControls>
	);
};

export default Controls;
