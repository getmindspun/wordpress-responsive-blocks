// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import MediaControl, { MediaControlProps } from './MediaControl';
import { useState } from '@wordpress/element';
import { BlockCSSProperties } from '../../types';
import { buildCSS } from '../../functions';

const meta: Meta<typeof MediaControl> = {
	component: MediaControl,
};

export default meta;

type Story = StoryObj<typeof MediaControl>;

const Display = (props: {
	attributes: BlockCSSProperties;
	children: React.ReactNode;
}) => {
	return (
		<>
			<div style={{ display: 'flex' }}>
				<div style={{ flexGrow: 1, flexBasis: 0 }}>
					<div
						style={{
							width: 280,
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					>
						{props.children}
					</div>
				</div>
				<div style={{ flexGrow: 1, flexBasis: 0, marginTop: '2em' }}>
					<pre
						style={{
							width: 'fit-content',
							margin: '0 auto',
						}}
					>
						{JSON.stringify(props.attributes, null, 4)}
					</pre>
				</div>
			</div>
		</>
	);
};

export const Default: Story = {
	render: () => {
		const [attributes, setAttributes] = useState<
			MediaControlProps['attributes']
		>({} as MediaControlProps['attributes']);
		return (
			<MediaControl
				attributes={attributes}
				setAttributes={setAttributes}
			/>
		);
	},
};

export const WithValue: Story = {
	name: 'with Media',
	render: () => {
		const [attributes, setAttributes] = useState<
			MediaControlProps['attributes']
		>({
			url: '/foo/image.jpg',
		} as MediaControlProps['attributes']);
		return (
			<MediaControl
				title={'Title'}
				attributes={attributes}
				setAttributes={setAttributes}
			/>
		);
	},
};

export const Responsive: Story = {
	render: () => {
		const [attributes, setAttributes] = useState<
			MediaControlProps['attributes']
		>({
			url: '/foo/imageBig.jpg',
			tabletUrl: '/foo/imageMedium.jpg',
			mobileUrl: '/foo/imageSmall.jpg',
		} as MediaControlProps['attributes']);
		return (
			<Display attributes={attributes}>
				<MediaControl
					title={'Title'}
					attributes={attributes}
					setAttributes={(newAttributes) => {
						setAttributes({ ...attributes, ...newAttributes });
					}}
					isResponsive
				/>
			</Display>
		);
	},
};
