import { Media, MediaSize, propertyName } from '@mindspun/wpx';
import classNames from 'classnames';

export function prop(name: string, deviceType: string) {
	return propertyName(name, true, deviceType) as keyof Media;
}

export function showOnValue(value: boolean | undefined) {
	return value !== undefined ? value : true;
}

function deviceTypeFromMedia(media: Media) {
	if (media.url) {
		return 'Desktop';
	}
	if (media.tabletUrl) {
		return 'Tablet';
	}
	if (media.mobileUrl) {
		return 'Mobile';
	}
	return undefined;
}

export function defaultMedia(media: Media) {
	const deviceType = deviceTypeFromMedia(media);
	if (deviceType === undefined) {
		return null;
	}
	return {
		id: media[prop('id', deviceType) as keyof Media],
		alt: media[prop('alt', deviceType) as keyof Media],
		url: media[prop('url', deviceType) as keyof Media],
		width: media[prop('width', deviceType) as keyof Media],
		height: media[prop('height', deviceType) as keyof Media],
	} as Media;
}

function clamp(allSizes: MediaSize[], maxSize: number): MediaSize[] {
	const sizes = [] as MediaSize[];

	for (const mediaSize of allSizes) {
		if (mediaSize.width >= maxSize) {
			mediaSize.width = maxSize;
			sizes.push(mediaSize);
			break;
		}
		sizes.push(mediaSize);
	}

	/* Make sure the image shows up to the breakpoint even if smaller. */
	if (sizes.length > 0) {
		sizes[sizes.length - 1].width = maxSize;
	}

	return sizes;
}

export function getMediaSizes(media: Media, deviceType: string): MediaSize[] {
	const sizes = [];

	const deviceSizes = media[prop('sizes', deviceType)] as {
		[key: string]: MediaSize;
	};

	if (deviceSizes) {
		for (const key in deviceSizes) {
			sizes.push(deviceSizes[key]);
		}
	}

	sizes.sort((a, b) => a.width - b.width);

	switch (deviceType) {
		case 'Tablet':
			return clamp(sizes, 1024);
		case 'Mobile':
			return clamp(sizes, 480);
	}
	return sizes;
}

export function getClassName(media: Media) {
	return classNames(
		[showOnValue(media.showOn) ? 'wpx--d-block' : 'wpx--d-none'],
		[
			showOnValue(media.tabletShowOn)
				? 'wpx--d-tablet-block'
				: 'wpx--d-tablet-none',
		],
		[
			showOnValue(media.mobileShowOn)
				? 'wpx--d-mobile-block'
				: 'wpx--d-mobile-none',
		]
	);
}
