import './GapControl.scss';

import LengthControl from '../LengthControl/LengthControl';

import { BlockCSSProperties } from '../../types';

const GapBaseControl = (props: {
	gap: BlockCSSProperties['gap'];
	onChange: (gap: BlockCSSProperties['gap']) => void;
	isAdvanced: boolean;
}) => {
	function onClear() {
		props.onChange(undefined);
	}

	return (
		<>
			<LengthControl
				value={props.gap}
				onChange={props.onChange}
				onClear={props.gap !== undefined ? onClear : undefined}
				isAdvanced={props.isAdvanced}
			/>
		</>
	);
};

export default GapBaseControl;
