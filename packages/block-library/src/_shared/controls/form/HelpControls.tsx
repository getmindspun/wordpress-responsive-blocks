import type { BlockCSSProperties } from '@mindspun/mrblx';
import { BaseControls, ContainerContents } from '@mindspun/mrblx';

type Attributes = {
	helpStyle: BlockCSSProperties;
};

const HelpControls = (props: {
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
}) => {
	return (
		<ContainerContents>
			<BaseControls
				attributes={props.attributes.helpStyle}
				setAttributes={(style) => {
					const helpStyle = {
						...props.attributes.helpStyle,
						...style,
					};
					props.setAttributes({ helpStyle });
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

export default HelpControls;
