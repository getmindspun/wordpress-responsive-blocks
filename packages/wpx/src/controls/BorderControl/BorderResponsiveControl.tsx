import './BorderControl.scss';

import { useGetPreviewDeviceType } from '../../hooks';
import { BorderControlProps } from './BorderControl';
import BorderBaseControl from './BorderBaseControl';

const BorderResponsiveControl = (props: BorderControlProps) => {
	const deviceType = useGetPreviewDeviceType();

	return (
		<>
			{deviceType === 'Desktop' && (
				<BorderBaseControl
					attributes={props.attributes}
					setAttributes={(attributes) =>
						props.setAttributes(attributes)
					}
				/>
			)}
			{deviceType === 'Tablet' && (
				<BorderBaseControl
					attributes={{
						borderTop: props.attributes.tabletBorderTop,
						borderRight: props.attributes.tabletBorderRight,
						borderBottom: props.attributes.tabletBorderBottom,
						borderLeft: props.attributes.tabletBorderLeft,
					}}
					setAttributes={(attributes) =>
						props.setAttributes({
							tabletBorderTop: attributes.borderTop,
							tabletBorderRight: attributes.borderRight,
							tabletBorderBottom: attributes.borderBottom,
							tabletBorderLeft: attributes.borderLeft,
						})
					}
				/>
			)}
			{deviceType === 'Mobile' && (
				<BorderBaseControl
					attributes={{
						borderTop: props.attributes.mobileBorderTop,
						borderRight: props.attributes.mobileBorderRight,
						borderBottom: props.attributes.mobileBorderBottom,
						borderLeft: props.attributes.mobileBorderLeft,
					}}
					setAttributes={(attributes) =>
						props.setAttributes({
							mobileBorderTop: attributes.borderTop,
							mobileBorderRight: attributes.borderRight,
							mobileBorderBottom: attributes.borderBottom,
							mobileBorderLeft: attributes.borderLeft,
						})
					}
				/>
			)}
		</>
	);
};

export default BorderResponsiveControl;
