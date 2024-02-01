import { BoxShadow, BoxShadowProperties } from './BoxShadowControl';
import { propertyName } from '../../functions';

export function prop(isResponsive: boolean | undefined, deviceType: string) {
	return propertyName(
		'boxShadow',
		isResponsive,
		deviceType
	) as keyof BoxShadowProperties;
}

function isLength(value: string) {
	for (const suffix of ['px', 'em', 'rem', '%']) {
		if (value.endsWith(suffix)) {
			return true;
		}
	}
	return value === '0';
}

function toLength(value: string | undefined): string | 0 | undefined {
	return value !== '0' ? value : 0;
}

/*
 * Parse boxShadow values that we generate, so only single values.
 */
export function parseBoxShadow(value: string | undefined) {
	const boxShadow = {
		offsetX: 0,
		offsetY: 0,
		blurRadius: undefined,
		spreadRadius: undefined,
		color: undefined,
		inset: false,
	} as BoxShadow;

	if (!value || value === 'none') {
		return boxShadow;
	}

	const tokens = value.split(' ');
	if (tokens[0] === 'inset') {
		boxShadow.inset = true;
		tokens.shift();
	}

	if (tokens.length < 2) {
		return boxShadow;
	}

	boxShadow.offsetX = toLength(tokens.shift());
	boxShadow.offsetY = toLength(tokens.shift());

	let token = tokens.shift();
	if (token !== undefined) {
		if (isLength(token)) {
			boxShadow.blurRadius = toLength(token);
		} else {
			boxShadow.color = token;
			return boxShadow;
		}
	} else {
		return boxShadow;
	}

	token = tokens.shift();
	if (token !== undefined) {
		if (isLength(token)) {
			boxShadow.spreadRadius = toLength(token);
		} else {
			boxShadow.color = token;
			return boxShadow;
		}
	} else {
		return boxShadow;
	}

	boxShadow.color = tokens.shift();
	return boxShadow;
}

export function toValue(boxShadow: BoxShadow): string | undefined {
	const tokens = [];
	if (boxShadow.inset) {
		tokens.push('inset');
	}
	tokens.push(boxShadow.offsetX, boxShadow.offsetY);
	if (boxShadow.blurRadius !== undefined) {
		tokens.push(boxShadow.blurRadius);
	}
	if (boxShadow.spreadRadius !== undefined) {
		tokens.push(boxShadow.spreadRadius);
	}
	if (boxShadow.color !== undefined) {
		tokens.push(boxShadow.color);
	}
	return tokens.join(' ');
}
