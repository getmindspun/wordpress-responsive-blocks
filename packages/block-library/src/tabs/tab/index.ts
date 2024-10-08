import { type BlockConfiguration } from '@wordpress/blocks';

import { registerInnerBlock } from '~shared/utils';

import edit from './edit';
import save from './save';
import icon from './icon';

export const BLOCK_NAME = 'mindspun/tab';

registerInnerBlock({
	name: BLOCK_NAME,
	title: 'Tab',
	description: 'A single tab in a tabbed container.',
	parent: ['mindspun/tabs'],
	attributes: {
		blockId: {
			type: 'string',
		},
		label: {
			type: 'string',
			default: 'Tab',
		},
		isDefault: {
			type: 'boolean',
		},
	},
	usesContext: ['mindspun/tabs'],
	edit,
	save,
	icon: {
		foreground: '#005ffe',
		src: icon,
	},
} as unknown as BlockConfiguration);
