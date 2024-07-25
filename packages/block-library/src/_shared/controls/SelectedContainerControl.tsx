import React from 'react';
import { SelectControl } from '@wordpress/components';

import { ContainerContents, useBlockState } from '@mindspun/mrblx';

import SelectedContainer, { SelectedContainerProps } from './SelectedContainer';

const SelectedContainerControl = (props: {
	blockId: string;
	label?: string;
	onSelect?: (value: React.Key) => void;
	children:
		| React.ReactElement<SelectedContainerProps, typeof SelectedContainer>
		| React.ReactElement<
				SelectedContainerProps,
				typeof SelectedContainer
		  >[];
}) => {
	const children = Array.isArray(props.children)
		? props.children
		: [props.children];

	const [blockState, setBlockState] = useBlockState<number>(props.blockId);

	const options = children.map((child, index) => {
		const key = child.key ? child.key : index.toString();
		return { label: key, value: index.toString() };
	});

	return (
		<div className={'mrblx--selected-control'}>
			<div className={'mrblx--selected-control-header'}>
				<ContainerContents>
					<SelectControl
						label={props.label}
						options={options}
						onChange={(value) => {
							setBlockState(parseInt(value));
						}}
						__nextHasNoMarginBottom
					/>
				</ContainerContents>
			</div>
			<hr style={{ marginBottom: 0 }} />
			{children[blockState ? blockState : 0]}
		</div>
	);
};

export default SelectedContainerControl;
