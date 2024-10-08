import { type BlockConfiguration } from '@wordpress/blocks';
import { button } from '@wordpress/icons';

import edit from './edit';
import save from './save';
import { registerInnerBlock } from '~shared/utils';

export const BLOCK_NAME = 'mindspun/button';

registerInnerBlock({
	name: BLOCK_NAME,
	title: 'Button',
	description: 'A single button in a button group.',
	parent: ['mindspun/buttons'],
	attributes: {
		blockId: {
			type: 'string',
		},
		fullWidth: {
			type: 'boolean',
			default: false,
		},
		variant: {
			type: 'string',
			default: 'primary',
		},
		text: {
			type: 'string',
		},
		link: {
			type: 'object',
			default: { rel: ['noopener'] },
		},
		customEvent: {
			type: 'object',
			default: {},
		},
		style: {
			type: 'object',
			default: {},
		},
	},
	usesContext: ['mindspun/buttons'],
	edit,
	save,
	icon: {
		foreground: '#005ffe',
		src: button,
	},
} as unknown as BlockConfiguration);
