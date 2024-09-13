import React from 'react';

export type SelectedContainerProps = {
	children: React.ReactNode;
};

const SelectedContainer = (props: SelectedContainerProps) => {
	return <div className={'mrblx--selected-container'}>{props.children}</div>;
};

export default SelectedContainer;
