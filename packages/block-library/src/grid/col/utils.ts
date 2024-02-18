import { Colspan } from './types';

export function colToRange(value: string | undefined) {
	if (value && value !== 'auto') {
		return parseInt(value);
	}
	return 12;
}

function colToHint(value: string | undefined) {
	if (value && value !== 'default') {
		return value === 'auto' ? 'auto' : `${value}/12`;
	}
	return '';
}

export function hint(colspan: Colspan, deviceType: string) {
	switch (deviceType) {
		case 'Tablet':
			return colToHint(colspan.tablet);
		case 'Mobile':
			return colToHint(colspan.mobile);
	}
	return colToHint(colspan.desktop);
}

export function radioSelected(value: string | undefined) {
	if (value) {
		if (value === 'auto' || value === 'default') {
			return value;
		}
		return 'fixed';
	}
	return 'inherit';
}

export function radioValue(value: string) {
	if (value === 'fixed') {
		return '12';
	}
	if (value === 'auto' || value === 'default') {
		return value;
	}
	return undefined;
}

export function isFixed(value: string | undefined) {
	return value && value !== 'auto' && value !== 'default';
}

export function getClassName(colspan: Colspan) {
	const classNames = [
		colspan.desktop !== 'default'
			? `mrblx-col-${colspan.desktop}`
			: 'mrblx-col',
	];
	if (colspan.tablet) {
		classNames.push(
			colspan.tablet !== 'default'
				? `mrblx-col-tablet-${colspan.tablet}`
				: 'mrblx-col-tablet'
		);
	}
	if (colspan.mobile) {
		classNames.push(
			colspan.mobile !== 'default'
				? `mrblx-col-mobile-${colspan.mobile}`
				: 'mrblx-col-mobile'
		);
	}
	return classNames.join(' ');
}
