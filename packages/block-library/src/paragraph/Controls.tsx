import { Props } from './types';
import {
	InspectorAdvancedControls,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	BaseControls,
	BlockCSSProperties,
	BlockId,
	ContainerContents,
	ContainerControl,
	CustomCSSControl,
} from '@mindspun/mrblx';

const Controls = (props: Props) => {
	return (
		<>
			<InspectorControls>
				<ContainerContents>
					<BaseControls
						attributes={
							props.attributes.style
								? props.attributes.style
								: ({} as BlockCSSProperties)
						}
						setAttributes={(style) => {
							props.setAttributes({
								style: { ...props.attributes.style, ...style },
							});
						}}
						options={{
							color: { responsive: true },
							backgroundColor: { responsive: true },
							textAlign: { responsive: true },
							fontSize: { responsive: true },
							letterCase: true,
							fontAppearance: true,
							margin: { responsive: true },
							padding: { responsive: true },
						}}
					/>
				</ContainerContents>
				<ContainerControl title={'Custom CSS'}>
					<ContainerContents>
						<CustomCSSControl
							blockId={props.attributes.blockId}
							attributes={props.attributes.style}
							setAttributes={(style) => {
								props.setAttributes({
									style: {
										...props.attributes.style,
										...style,
									},
								});
							}}
							isResponsive={true}
						/>
					</ContainerContents>
				</ContainerControl>
			</InspectorControls>
			<InspectorAdvancedControls>
				<BlockId attributes={props.attributes} />
			</InspectorAdvancedControls>
		</>
	);
};

export default Controls;
