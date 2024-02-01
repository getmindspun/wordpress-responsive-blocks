import { Popover, ColorPalette } from '@wordpress/components';
import { useState } from '@wordpress/element';

import ColorDisplay from './ColorDisplay';
import { useMobile } from '../../hooks';
import useColors from '../../hooks/useColors';
import { PopoverPlacement } from './ColorControl';

const ColorBaseControl = (props: {
	label: string;
	value: string | undefined;
	onChange: (colorValue?: string) => void;
	placement?: PopoverPlacement;
}) => {
	const [visible, setVisible] = useState(false);
	const isMobile = useMobile();
	const colors = useColors();

	const placement = isMobile ? 'bottom-start' : 'left-start';
	const offset = isMobile ? -36 : 20;

	function onClose() {
		setVisible(false);
	}

	return (
		<>
			<ColorDisplay
				colorValue={props.value}
				title={props.label}
				onClick={() => setVisible(!visible)}
			/>
			{visible && (
				<Popover
					onClose={onClose}
					placement={props.placement ? props.placement : placement}
					offset={offset}
				>
					<div className="wpx--popover">
						<ColorPalette
							colors={colors}
							value={props.value}
							onChange={props.onChange}
						/>
					</div>
				</Popover>
			)}
		</>
	);
};

export default ColorBaseControl;
