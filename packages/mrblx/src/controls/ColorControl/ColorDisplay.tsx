import { ColorIndicator, Button } from '@wordpress/components';
import './ColorDisplay.scss';

export interface ColorDisplayProps {
	colorValue: string | undefined;
	title: string;
	onClick: () => void;
}

const ColorDisplay = (props: ColorDisplayProps) => {
	return (
		<Button className="mrblx--color-display" onClick={props.onClick}>
			<ColorIndicator colorValue={props.colorValue} />
			{props.title}
		</Button>
	);
};

export default ColorDisplay;
