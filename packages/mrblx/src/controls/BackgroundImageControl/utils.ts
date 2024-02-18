import { BlockCSSProperties } from '../../types';
import { Media } from '../MediaControl/MediaControl';
import * as url from 'url';

export function urlIt(value: string | undefined) {
	if (value && !value.startsWith('url(')) {
		return `url(${value})`;
	}
	return undefined;
}

export function unUrlIt(value: string | undefined) {
	if (value && value !== 'none') {
		if (value.startsWith('url(')) {
			value = value.substring(4);
		}
		if (value.endsWith(')')) {
			value = value.substring(0, value.length - 1);
		}
		return value;
	}
	return undefined;
}

function showOn(value: boolean | undefined) {
	return value !== undefined ? value : true;
}

export function backgroundImageToMedia(attributes: BlockCSSProperties) {
	return {
		url: unUrlIt(attributes.backgroundImage),
		showOn: attributes.backgroundImage !== 'none',
		tabletUrl: unUrlIt(attributes.tabletBackgroundImage),
		tabletShowOn: attributes.tabletBackgroundImage !== 'none',
		mobileUrl: unUrlIt(attributes.mobileBackgroundImage),
		mobileShowOn: attributes.mobileBackgroundImage !== 'none',
	} as Media;
}

export function mediaToBackgroundImage(
	attributes: BlockCSSProperties,
	media: Media
): BlockCSSProperties {
	const backgroundImage = showOn(media.showOn) ? urlIt(media.url) : 'none';
	const tabletBackgroundImage = showOn(media.tabletShowOn)
		? urlIt(media.tabletUrl)
		: 'none';
	const mobileBackgroundImage = showOn(media.mobileShowOn)
		? urlIt(media.mobileUrl)
		: 'none';

	return {
		backgroundImage,
		backgroundSize:
			backgroundImage && backgroundImage !== 'none'
				? attributes.backgroundSize
				: undefined,
		tabletBackgroundImage,
		tabletBackgroundSize:
			tabletBackgroundImage && tabletBackgroundImage !== 'none'
				? attributes.tabletBackgroundSize
				: undefined,
		mobileBackgroundImage,
		mobileBackgroundSize:
			mobileBackgroundImage && mobileBackgroundImage !== 'none'
				? attributes.mobileBackgroundSize
				: undefined,
	};
}

export function showBackgroundSize(
	attributes: BlockCSSProperties,
	deviceType: string
) {
	switch (deviceType) {
		case 'Mobile':
			if (attributes.mobileBackgroundImage === 'none') {
				return false;
			}
			return !!(
				attributes.mobileBackgroundImage ||
				(attributes.tabletBackgroundImage &&
					attributes.tabletBackgroundImage !== 'none') ||
				(attributes.backgroundImage &&
					attributes.backgroundImage !== 'none')
			);
		case 'Tablet':
			return !!(
				attributes.tabletBackgroundImage ||
				(attributes.backgroundImage &&
					attributes.backgroundImage !== 'none')
			);
	}
	return !!(
		attributes.backgroundImage && attributes.backgroundImage !== 'none'
	);
}
