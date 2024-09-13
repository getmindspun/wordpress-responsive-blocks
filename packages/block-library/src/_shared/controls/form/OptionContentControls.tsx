import {
	BaseControls,
	ContainerContents,
	ContainerControl,
} from '@mindspun/mrblx';
import { ElementsAttributes } from '~shared/types';
import { __ } from '@wordpress/i18n';

type Attributes = Pick<
	ElementsAttributes,
	'optionContentStyle' | 'optionContentErrorStyle'
>;

const OptionContentControls = (props: {
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
}) => {
	return (
		<>
			<ContainerContents>
				<BaseControls
					attributes={props.attributes.optionContentStyle}
					setAttributes={(style) => {
						const optionContentStyle = {
							...props.attributes.optionContentStyle,
							...style,
						};
						props.setAttributes({
							optionContentStyle,
						});
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
			<ContainerControl title={__('Error State')}>
				<ContainerContents>
					<BaseControls
						attributes={props.attributes.optionContentErrorStyle}
						setAttributes={(style) => {
							const optionContentErrorStyle = {
								...props.attributes.optionContentErrorStyle,
								...style,
							};
							props.setAttributes({ optionContentErrorStyle });
						}}
						options={{
							color: { responsive: true },
							backgroundColor: { responsive: true },
						}}
					/>
				</ContainerContents>
			</ContainerControl>
		</>
	);
};

export default OptionContentControls;
