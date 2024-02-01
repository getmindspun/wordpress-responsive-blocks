// noinspection JSUnusedGlobalSymbols

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { close } from '@wordpress/icons';

import TabbedControl from './TabbedControl';
import TabbedContainer from '../../components/TabbedContainer/TabbedContainer';
import ContainerContents from '../../components/ContainerContents/ContainerContents';

const meta: Meta<typeof TabbedControl> = {
	component: TabbedControl,
};

export default meta;

type Story = StoryObj<typeof TabbedControl>;

export const Default: Story = {
	render: () => {
		return (
			<TabbedControl>
				<TabbedContainer>
					<ContainerContents>Hello World</ContainerContents>
				</TabbedContainer>
				<TabbedContainer>
					<ContainerContents>Goodnight Moon</ContainerContents>
				</TabbedContainer>
			</TabbedControl>
		);
	},
};

export const Labels: Story = {
	render: () => {
		return (
			<TabbedControl>
				<TabbedContainer key={'Hello'}>
					<ContainerContents>Hello World</ContainerContents>
				</TabbedContainer>
				<TabbedContainer key={'Goodbye'}>
					<ContainerContents>Goodnight Moon</ContainerContents>
				</TabbedContainer>
			</TabbedControl>
		);
	},
};

/* NOTE: dashicons.css isn't loaded so 'smiley' won't be displayed. */
export const Icons: Story = {
	render: () => {
		return (
			<TabbedControl>
				<TabbedContainer icon={'smiley'}>
					<ContainerContents>Hello World</ContainerContents>
				</TabbedContainer>
				<TabbedContainer icon={close} key={'Goodbye'}>
					<ContainerContents>Goodnight Moon</ContainerContents>
				</TabbedContainer>
			</TabbedControl>
		);
	},
};
