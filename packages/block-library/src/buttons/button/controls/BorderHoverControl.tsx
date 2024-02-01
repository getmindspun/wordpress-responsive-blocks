import { BlockCSSProperties, BorderControl } from '@mindspun/wpx';

const BorderHoverControl = (props: {
	attributes: BlockCSSProperties;
	setAttributes: (attributes: Partial<BlockCSSProperties>) => void;
}) => {
	return (
		<BorderControl
			label="Border"
			attributes={{
				borderTop: props.attributes.borderTopHover,
				borderRight: props.attributes.borderRightHover,
				borderBottom: props.attributes.borderBottomHover,
				borderLeft: props.attributes.borderLeftHover,

				tabletBorderTop: props.attributes.tabletBorderTopHover,
				tabletBorderRight: props.attributes.tabletBorderRightHover,
				tabletBorderBottom: props.attributes.tabletBorderBottomHover,
				tabletBorderLeft: props.attributes.tabletBorderLeftHover,

				mobileBorderTop: props.attributes.mobileBorderTopHover,
				mobileBorderRight: props.attributes.mobileBorderRightHover,
				mobileBorderBottom: props.attributes.mobileBorderBottomHover,
				mobileBorderLeft: props.attributes.mobileBorderLeftHover,
			}}
			setAttributes={(newAttributes) => {
				const attributes = {
					...props.attributes,
					...{
						borderTopHover: newAttributes.borderTop,
						borderRightHover: newAttributes.borderRight,
						borderBottomHover: newAttributes.borderBottom,
						borderLeftHover: newAttributes.borderLeft,

						tabletBorderTopHover: newAttributes.tabletBorderTop,
						tabletBorderRightHover: newAttributes.tabletBorderRight,
						tabletBorderBottomHover:
							newAttributes.tabletBorderBottom,
						tabletBorderLeftHover: newAttributes.tabletBorderLeft,

						mobileBorderTopHover: newAttributes.mobileBorderTop,
						mobileBorderRightHover: newAttributes.mobileBorderRight,
						mobileBorderBottomHover:
							newAttributes.mobileBorderBottom,
						mobileBorderLeftHover: newAttributes.mobileBorderLeft,
					},
				};
				props.setAttributes(attributes);
			}}
			isResponsive={true}
			disableRadiusControl={true}
		/>
	);
};

export default BorderHoverControl;
