import React from 'react';
import { ControlHeader } from '../index';

export interface ColorsGroupProps {
	children: React.ReactNode;
	isResponsive?: boolean;
}

const ColorsGroup = (props: ColorsGroupProps) => {
	return (
		<div className="wpx--colors-group">
			{props.isResponsive && <ControlHeader isResponsive={true} />}
			<div className={'wpx-colors'}>{props.children}</div>
		</div>
	);
};

export default ColorsGroup;
