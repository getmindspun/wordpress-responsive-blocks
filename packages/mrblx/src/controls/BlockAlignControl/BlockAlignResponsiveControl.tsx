import './BlockAlignControl.scss';
import { BlockAlign } from '../../types';

import { useGetPreviewDeviceType } from '../../hooks';
import { BlockAlignControlProps } from './BlockAlignControl';
import BlockAlignBaseControl from './BlockAlignBaseControl';

const BlockAlignResponsiveControl = (props: BlockAlignControlProps) => {
	const deviceType = useGetPreviewDeviceType();
	const options = props.options
		? props.options
		: (['left', 'center', 'right', 'wide', 'full'] as BlockAlign[]);

	return (
		<>
			{deviceType === 'Desktop' && (
				<BlockAlignBaseControl
					blockAlign={props.attributes.blockAlign}
					onChange={(blockAlign) => {
						props.setAttributes({
							...props.attributes,
							blockAlign,
						});
					}}
					options={options}
				/>
			)}
			{deviceType === 'Tablet' && (
				<BlockAlignBaseControl
					blockAlign={props.attributes.tabletBlockAlign}
					onChange={(tabletBlockAlign) => {
						props.setAttributes({
							...props.attributes,
							tabletBlockAlign,
						});
					}}
					options={options}
				/>
			)}
			{deviceType === 'Mobile' && (
				<BlockAlignBaseControl
					blockAlign={props.attributes.mobileBlockAlign}
					onChange={(mobileBlockAlign) => {
						props.setAttributes({
							...props.attributes,
							mobileBlockAlign,
						});
					}}
					options={options}
				/>
			)}
		</>
	);
};

export default BlockAlignResponsiveControl;
