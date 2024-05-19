import { Props } from '../types';
import {
	InspectorAdvancedControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { layout, styles } from '@wordpress/icons';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import {
	BlockId,
	ContainerContents,
	TabbedContainer,
	TabbedControl,
	useGetPreviewDeviceType,
} from '@mindspun/mrblx';
import DisplayControl from './DisplayControl';
import SizingControl from './sizing/SizingControl';
import StyleControls from './StyleControls';
import TableCellControls from './TableCellControls';
import React from 'react';
import FlexControls from './FlexControls';
import TableControls from './TableControls';

const tagOptions = [
	{ label: 'Default <div>', value: 'div' },
	{ label: '<section>', value: 'section' },
	{ label: '<header>', value: 'header' },
	{ label: '<main>', value: 'main' },
	{ label: '<article>', value: 'article' },
	{ label: '<aside>', value: 'aside' },
	{ label: '<footer>', value: 'footer' },
	{ label: '<table>', value: 'table' },
	{ label: '<tr>', value: 'tr' },
	{ label: '<th>', value: 'th' },
	{ label: '<td>', value: 'td' },
	{ label: '<thead>', value: 'thead' },
	{ label: '<tfoot>', value: 'tfoot' },
]

function showFlexControls(props: Props, deviceType: string) {
	const allowed = ['flex', 'inline-flex'];
	switch (deviceType) {
		case 'Tablet':
			return allowed.includes(
				props.attributes.style.tabletDisplay as string
			);
		case 'Mobile':
			return allowed.includes(
				props.attributes.style.mobileDisplay as string
			);
	}
	return allowed.includes(props.attributes.style.display as string);
}

function showTableControls(props: Props) {
	return props.attributes.tagName === 'table';
}

function showTableCellControls(props: Props, deviceType: string) {
	const allowed = ['inline', 'inline-block', 'table-cell'];
	switch (deviceType) {
		case 'Tablet':
			return allowed.includes(
				props.attributes.style.tabletDisplay as string
			);
		case 'Mobile':
			return allowed.includes(
				props.attributes.style.mobileDisplay as string
			);
	}
	return allowed.includes(props.attributes.style.display as string);
}

const Controls = (
	props: Props & {
		onMouseEnter?: () => void;
		onMouseLeave?: () => void;
	}
) => {
	const deviceType = useGetPreviewDeviceType();

	return (
		<>
			<InspectorControls>
				<div
					className={'wp-block-mindspun-container--controls'}
					onMouseEnter={props.onMouseEnter}
					onMouseLeave={props.onMouseLeave}
				>
					<TabbedControl>
						<TabbedContainer key={'Layout'} icon={layout}>
							<ContainerContents>
								<SelectControl
									label={__('HTML Tag')}
									value={
										props.attributes.tagName
											? props.attributes.tagName
											: 'div'
									}
									options={tagOptions}
									onChange={(tagName) =>
										props.setAttributes({ tagName })
									}
									__nextHasNoMarginBottom
								/>
								<DisplayControl
									attributes={props.attributes.style}
									setAttributes={(newStyle) => {
										const style = {
											...props.attributes.style,
											...newStyle,
										};
										props.setAttributes({ style });
									}}
								/>
								{showFlexControls(props, deviceType) ? (
									<FlexControls {...props} />
								) : null}
								{showTableControls(props) ? (
									<TableControls
										attributes={props.attributes.style}
										setAttributes={(newStyle) => {
											const style = {
												...props.attributes.style,
												...newStyle,
											};
											props.setAttributes({ style });
										}}
									/>
								) : null}
								{showTableCellControls(props, deviceType) ? (
									<TableCellControls
										attributes={props.attributes.style}
										setAttributes={(newStyle) => {
											const style = {
												...props.attributes.style,
												...newStyle,
											};
											props.setAttributes({ style });
										}}
									/>
								) : null}
								<hr />
								<SizingControl
									attributes={props.attributes.style}
									setAttributes={(newStyle) => {
										const style = {
											...props.attributes.style,
											...newStyle,
										};
										props.setAttributes({ style });
									}}
								/>
							</ContainerContents>
						</TabbedContainer>
						<TabbedContainer key={'Style'} icon={styles}>
							<StyleControls
								attributes={props.attributes}
								setAttributes={props.setAttributes}
							/>
						</TabbedContainer>
					</TabbedControl>
				</div>
			</InspectorControls>
			<InspectorAdvancedControls>
				<BlockId attributes={props.attributes} />
			</InspectorAdvancedControls>
		</>
	);
};

export default Controls;
