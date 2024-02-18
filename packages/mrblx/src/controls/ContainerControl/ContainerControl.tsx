import React from 'react';
import { chevronUp, chevronDown } from '@wordpress/icons';

import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

import './ContainerControl.scss';

export interface ContainerControlProps {
	title: string;
	children: React.ReactNode;
	initialOpen?: boolean;
	headingTag?: 'h2' | 'h3';
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

const ContainerControl = (props: ContainerControlProps) => {
	const [isOpen, setIsOpen] = useState(
		props.initialOpen ? props.initialOpen : false
	);
	const HeadingTag = props.headingTag
		? (props.headingTag as keyof React.JSX.IntrinsicElements)
		: 'h2';

	return (
		<div
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
		>
			<div
				className="mrblx--container-control"
				onClick={() => setIsOpen(!isOpen)}
				role="presentation"
			>
				<HeadingTag>
					<Button icon={isOpen ? chevronUp : chevronDown}>
						{props.title}
					</Button>
				</HeadingTag>
			</div>
			{isOpen && props.children}
		</div>
	);
};

export default ContainerControl;
