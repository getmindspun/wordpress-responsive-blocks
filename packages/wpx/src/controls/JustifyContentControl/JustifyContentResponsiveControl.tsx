import './JustifyContentControl.scss';
import { JustifyContent } from '../../types';

import { useGetPreviewDeviceType } from '../../hooks';
import { JustifyContentControlProps } from './JustifyContentControl';
import JustifyContentBaseControl from './JustifyContentBaseControl';

const JustifyContentResponsiveControl = (props: JustifyContentControlProps) => {
	const deviceType = useGetPreviewDeviceType();
	const options = props.options
		? props.options
		: (['left', 'center', 'right', 'wide', 'full'] as JustifyContent[]);

	return (
		<>
			{deviceType === 'Desktop' && (
				<JustifyContentBaseControl
					justifyContent={props.attributes.justifyContent}
					onChange={(justifyContent) => {
						props.setAttributes({
							...props.attributes,
							justifyContent,
						});
					}}
					options={options}
				/>
			)}
			{deviceType === 'Tablet' && (
				<JustifyContentBaseControl
					justifyContent={props.attributes.tabletJustifyContent}
					onChange={(tabletJustifyContent) => {
						props.setAttributes({
							...props.attributes,
							tabletJustifyContent,
						});
					}}
					options={options}
				/>
			)}
			{deviceType === 'Mobile' && (
				<JustifyContentBaseControl
					justifyContent={props.attributes.mobileJustifyContent}
					onChange={(mobileJustifyContent) => {
						props.setAttributes({
							...props.attributes,
							mobileJustifyContent,
						});
					}}
					options={options}
				/>
			)}
		</>
	);
};

export default JustifyContentResponsiveControl;
