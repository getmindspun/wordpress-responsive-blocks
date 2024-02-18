import './BackgroundImageControl.scss';
import { BlockCSSProperties } from '../../types';
import { MediaControl } from '../index';
import { useGetPreviewDeviceType } from '../../hooks';
import {
	backgroundImageToMedia,
	mediaToBackgroundImage,
	showBackgroundSize,
} from './utils';
import BackgroundSizeControl from './BackgroundSizeControl';
import { propertyName } from '../../functions';

type Help = string | { desktop?: string; tablet?: string; mobile?: string };

function helpText(
	help: Help | undefined,
	deviceType: 'desktop' | 'tablet' | 'mobile'
) {
	if (help) {
		return typeof help === 'string' ? help : help[deviceType];
	}
	return undefined;
}

export type BackgroundImageControlProps = {
	label?: string;
	attributes: BlockCSSProperties;
	setAttributes: (
		values: Partial<BackgroundImageControlProps['attributes']>
	) => void;
	help?: string | { desktop?: string; tablet?: string; mobile?: string };
	isResponsive?: boolean;
};
const BackgroundImageControl = (props: BackgroundImageControlProps) => {
	const deviceType = useGetPreviewDeviceType();
	const label = props.label !== undefined ? props.label : 'Background Image';
	const media = backgroundImageToMedia(props.attributes);

	return (
		<div className="mrblx--background-image-control">
			<MediaControl
				title={label}
				attributes={media}
				setAttributes={(newMedia) => {
					const attributes = mediaToBackgroundImage(
						props.attributes,
						{ ...media, ...newMedia }
					);
					props.setAttributes({ ...props.attributes, ...attributes });
				}}
				help={helpText(props.help, 'desktop')}
				isResponsive={props.isResponsive}
			/>
			{showBackgroundSize(props.attributes, deviceType) && (
				<BackgroundSizeControl
					value={
						props.attributes[
							propertyName(
								'backgroundSize',
								props.isResponsive,
								deviceType
							)
						]
					}
					onChange={(value) => {
						props.setAttributes({
							[propertyName(
								'backgroundSize',
								props.isResponsive,
								deviceType
							)]: value,
						});
					}}
				/>
			)}
		</div>
	);
};

export default BackgroundImageControl;
