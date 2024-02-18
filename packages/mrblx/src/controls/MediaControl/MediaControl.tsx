import React from 'react';
import { MediaPlaceholder } from '@wordpress/block-editor';
import { ToggleControl } from '@wordpress/components';

import './MediaControl.scss';
import { ControlHeader } from '../../components';
import {
	showClear,
	prop,
	basename,
	showOnValue,
	showDeviceToggle,
} from './utils';
import { useGetPreviewDeviceType } from '../../hooks';

type MediaPlaceholderProps = {
	id: number;
} & { [p: string]: any };

export type MediaSize = {
	width: number;
	height: number;
	url: string;
	orientation: string;
};

export type Media = {
	url?: string;
	id?: string;
	alt?: string;
	width?: number;
	height?: number;
	sizes?: {
		[key: string]: MediaSize;
	};
	showOn?: boolean;

	tabletUrl?: string;
	tabletId?: string;
	tabletAlt?: string;
	tabletWidth?: number;
	tabletHeight?: number;
	tabletSizes?: {
		[key: string]: MediaSize;
	};
	tabletShowOn?: boolean;

	mobileUrl?: string;
	mobileId?: string;
	mobileAlt?: string;
	mobileWidth?: number;
	mobileHeight?: number;
	mobileSizes?: {
		[key: string]: MediaSize;
	};
	mobileShowOn?: boolean;
};

export interface MediaControlProps {
	title?: string;
	help?: string;
	attributes: Media;
	setAttributes: (attributes: Partial<Media>) => void;
	isResponsive?: boolean;
}

const MediaControl = (props: MediaControlProps) => {
	const deviceType = useGetPreviewDeviceType();

	const onSelect = (media: MediaPlaceholderProps | null) => {
		if (!media || !media.url) {
			props.setAttributes({
				[prop('url', props.isResponsive, deviceType)]: undefined,
				[prop('id', props.isResponsive, deviceType)]: undefined,
				[prop('alt', props.isResponsive, deviceType)]: undefined,
				[prop('width', props.isResponsive, deviceType)]: undefined,
				[prop('height', props.isResponsive, deviceType)]: undefined,
				[prop('sizes', props.isResponsive, deviceType)]: undefined,
			});
			return;
		}
		props.setAttributes({
			[prop('url', props.isResponsive, deviceType)]: media.url,
			[prop('id', props.isResponsive, deviceType)]: media.id,
			[prop('alt', props.isResponsive, deviceType)]: media.alt,
			[prop('width', props.isResponsive, deviceType)]: media.width,
			[prop('height', props.isResponsive, deviceType)]: media.height,
			[prop('sizes', props.isResponsive, deviceType)]: media.sizes,
		});
	};

	const onClear = () => {
		onSelect(null);
	};

	return (
		<div className={'mrblx--media-control'}>
			<ControlHeader
				title={props.title}
				onClear={
					showClear(props.attributes, props.isResponsive, deviceType)
						? onClear
						: undefined
				}
				isResponsive={props.isResponsive}
			/>
			{!props.attributes[prop('url', props.isResponsive, deviceType)] ? (
				<>
					<MediaPlaceholder
						labels={{ title: '' }}
						accept="image/*"
						allowedTypes={['image']}
						onSelect={(media) => onSelect(media)}
						multiple={false}
						onHTMLDrop={() => {}}
					/>
					{!!props.help && <small>{props.help}</small>}
				</>
			) : (
				<div className="mrblx--filename">
					{basename(
						(props.attributes[
							prop('url', props.isResponsive, deviceType)
						] as string) || ''
					)}
				</div>
			)}
			{showDeviceToggle(
				props.attributes,
				props.isResponsive,
				deviceType
			) && (
				<ToggleControl
					label={`Show on ${props.isResponsive ? deviceType : 'Desktop'}`}
					checked={showOnValue(
						props.attributes,
						props.isResponsive,
						deviceType
					)}
					onChange={(isChecked) => {
						props.setAttributes({
							[prop('showOn', props.isResponsive, deviceType)]:
								isChecked,
						});
					}}
				/>
			)}
		</div>
	);
};

MediaControl.defaultProps = {
	isResponsive: false,
};

export default MediaControl;
