import { BlockCSSProperties } from '../../types';
import { CSSProperties } from 'react';

function calculateIsMixed(attributes: BlockCSSProperties, deviceType: string) {
	switch (deviceType) {
		case 'Tablet':
			return (
				attributes.tabletPaddingTop !==
					attributes.tabletPaddingBottom ||
				attributes.tabletPaddingTop !== attributes.tabletPaddingLeft ||
				attributes.tabletPaddingTop !== attributes.tabletPaddingRight
			);
		case 'Mobile':
			return (
				attributes.mobilePaddingTop !==
					attributes.mobilePaddingBottom ||
				attributes.mobilePaddingTop !== attributes.mobilePaddingLeft ||
				attributes.mobilePaddingTop !== attributes.mobilePaddingRight
			);
	}
	return !areAllPaddingsEqual(attributes);
}

export function areAllPaddingsEqual(attributes: CSSProperties) {
	return (
		attributes.paddingTop === attributes.paddingBottom &&
		attributes.paddingTop === attributes.paddingRight &&
		attributes.paddingTop === attributes.paddingLeft
	);
}

export function headerHint(attributes: BlockCSSProperties, deviceType: string) {
	if (calculateIsMixed(attributes, deviceType)) {
		return 'MIXED';
	}
	let value = attributes.paddingTop;
	switch (deviceType) {
		case 'Tablet':
			value = attributes.tabletPaddingTop;
			break;
		case 'Mobile':
			value = attributes.mobilePaddingTop;
			break;
	}
	if (value === '0px') {
		return '0';
	}
	return value !== undefined ? value.toString() : '\u2205';
}

export function showClear(attributes: BlockCSSProperties, deviceType: string) {
	switch (deviceType) {
		case 'Tablet':
			return (
				attributes.tabletPaddingTop !== undefined ||
				attributes.tabletPaddingRight !== undefined ||
				attributes.tabletPaddingBottom !== undefined ||
				attributes.tabletPaddingLeft !== undefined
			);
		case 'Mobile':
			return (
				attributes.mobilePaddingTop !== undefined ||
				attributes.mobilePaddingRight !== undefined ||
				attributes.mobilePaddingBottom !== undefined ||
				attributes.mobilePaddingLeft !== undefined
			);
	}

	return (
		attributes.paddingTop !== undefined ||
		attributes.paddingLeft !== undefined ||
		attributes.paddingBottom !== undefined ||
		attributes.paddingRight !== undefined
	);
}
