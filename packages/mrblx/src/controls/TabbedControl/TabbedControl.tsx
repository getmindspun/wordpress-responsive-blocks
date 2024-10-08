import React from 'react';
import classNames from 'classnames';

import { Button, type IconType } from '@wordpress/components';

import './TabbedControl.scss';
import { useBlockState } from '../../hooks';

function findActiveIndex(
	key: React.Key,
	children: React.ReactElement<TabContainerProps>[]
) {
	for (let i = 0; i < children.length; i++) {
		const childKey = children[i].key ? children[i].key : i;
		if (childKey === key) {
			return i;
		}
	}
	return 0;
}

export interface TabContainerProps {
	icon?: IconType | null;
}

const TabbedControl = (props: {
	name?: string | number;
	onSelect?: (value: React.Key) => void;
	children:
		| React.ReactElement<TabContainerProps>
		| React.ReactElement<TabContainerProps>[];
}) => {
	const name = props.name ? props.name : 'tab';
	const children = Array.isArray(props.children)
		? props.children
		: [props.children];
	const [blockState, setBlockState] = useBlockState(name);

	const activeIndex = blockState ? findActiveIndex(blockState, children) : 0;
	return (
		<div className={'mrblx--tabbed-control'}>
			<div className={'mrblx--tabbed-header'}>
				{children.map((child, index) => {
					const key = child.key ? child.key : index;
					const className = classNames('mrblx--tab', {
						'mrblx--tab-active': index === activeIndex,
					});
					return (
						<div key={key} className={className}>
							<Button
								icon={child.props.icon}
								onClick={() => {
									setBlockState(key);
									if (props.onSelect) {
										props.onSelect(key);
									}
								}}
							>
								{child.props.icon ? child.key : key}
							</Button>
						</div>
					);
				})}
			</div>
			{children[activeIndex]}
		</div>
	);
};

export default TabbedControl;
