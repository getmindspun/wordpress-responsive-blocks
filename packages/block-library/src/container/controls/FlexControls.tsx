import { Props } from '../types';
import FlexDirectionControl from './FlexDirectionControl';
import JustifyContentControl from './JustifyContentControl';
import AlignItemsControl from './AlignItemsControl';

const FlexControls = (props: Props) => (
	<>
		<FlexDirectionControl
			attributes={props.attributes.style}
			setAttributes={(newStyle) => {
				const style = {
					...props.attributes.style,
					...newStyle,
				};
				props.setAttributes({ style });
			}}
		/>
		<JustifyContentControl
			attributes={props.attributes.style}
			setAttributes={(newStyle) => {
				const style = {
					...props.attributes.style,
					...newStyle,
				};
				props.setAttributes({ style });
			}}
		/>
		<AlignItemsControl
			attributes={props.attributes.style}
			setAttributes={(newStyle) => {
				const style = {
					...props.attributes.style,
					...newStyle,
				};
				props.setAttributes({ style });
			}}
		/>
	</>
);

export default FlexControls;
