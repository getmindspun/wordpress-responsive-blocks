import { useInnerBlocksProps } from '@wordpress/block-editor';
import { useBlockPropsWithId } from '@mindspun/mrblx';
import { Props } from './types';
import Header from './components/Header';
import Tab from './components/Tab';
import React from 'react';

export default function save(props: {
	attributes: Props['attributes'];
	clientId: string;
}) {
	const blockProps = useBlockPropsWithId.save(props);
	const innerBlocksProps = useInnerBlocksProps.save({
		className: 'mrblx--tab-contents',
	});

	return (
		<div {...blockProps}>
			<Header {...props}>
				{Object.keys(props.attributes.labels || []).map(
					(label, index) => {
						const blockId = props.attributes.labels[label];
						return (
							<Tab
								key={label}
								blockId={blockId}
								label={label}
								isActive={index === 0}
							/>
						);
					}
				)}
			</Header>
			<div {...innerBlocksProps} />
		</div>
	);
}
