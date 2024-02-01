import {
	FOUR_COLUMNS,
	THREE_COLUMNS,
	TWO_COLUMNS,
	WIDE_LEFT,
	WIDE_RIGHT,
} from './template';

import twoColumns from './_icons/two_columns';
import wideLeft from './_icons/wide_left';
import wideRight from './_icons/wide_right';
import threeColumns from './_icons/three_columns';
import fourColumns from './_icons/four_columns';

export default [
	{
		name: 'two_column',
		title: 'Two Columns',
		description: 'Two default columns',
		scope: ['block'],
		icon: twoColumns,
		innerBlocks: TWO_COLUMNS,
	},
	{
		name: 'wide_left',
		title: 'Wide left column',
		description: 'Two columns with the right column fitted to content.',
		scope: ['block'],
		icon: wideLeft,
		innerBlocks: WIDE_LEFT,
	},
	{
		name: 'wide_right',
		title: 'Wide right column',
		description: 'Two columns with the left column fitted to content.',
		scope: ['block'],
		icon: wideRight,
		innerBlocks: WIDE_RIGHT,
	},
	{
		name: 'three_columns',
		title: 'Three columns',
		description: 'Three equal columns',
		scope: ['block'],
		icon: threeColumns,
		innerBlocks: THREE_COLUMNS,
	},
	{
		name: 'four_columns',
		title: 'Four columns',
		description: 'Four equal columns',
		scope: ['block'],
		icon: fourColumns,
		innerBlocks: FOUR_COLUMNS,
	},
];
