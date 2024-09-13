import type { BlockCSSProperties } from '@mindspun/mrblx';
import { BaseControls, ContainerContents } from '@mindspun/mrblx';

type Attributes = {
	fieldErrorStyle: BlockCSSProperties;
};

const FieldErrorControls = (props: {
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
}) => {
	return (
		<ContainerContents>
			<BaseControls
				attributes={props.attributes.fieldErrorStyle}
				setAttributes={(style) => {
					const fieldErrorStyle = {
						...props.attributes.fieldErrorStyle,
						...style,
					};
					props.setAttributes({ fieldErrorStyle });
				}}
				options={{
					color: { responsive: true },
					backgroundColor: { responsive: true },
					fontAppearance: true,
					fontSize: { responsive: true },
					textAlign: { responsive: true },
					letterCase: true,
					margin: { responsive: true },
					padding: { responsive: true },
				}}
			/>
		</ContainerContents>
	);
};

export default FieldErrorControls;
