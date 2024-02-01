import React from 'react';

import './ContainerContents.scss';

export interface ContainerContentsProps {
	children: React.ReactNode;
	showDivider?: boolean;
}

const ContainerContents = (props: ContainerContentsProps) => {
	return (
		<>
			<div className="wpx--container-contents">{props.children}</div>
			{props.showDivider && <div className={'wpx--divider'} />}
		</>
	);
};

export default ContainerContents;
