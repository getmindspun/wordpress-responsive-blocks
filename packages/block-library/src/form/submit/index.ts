import { type BlockConfiguration } from '@wordpress/blocks';
import { button } from '@wordpress/icons';

import edit from './edit';
import save from './save';
import { registerInnerBlock } from '~shared/utils';

registerInnerBlock({
	name: 'mindspun/submit',
	title: 'Submit/Reset',
	description: 'Submit or Reset button for this form.',
	ancestor: ['mindspun/form'],
	attributes: {
		blockId: {
			type: 'string',
		},
		type: {
			type: 'string',
			default: 'submit',
		},
		value: {
			type: 'string',
		},
		style: {
			type: 'object',
			default: {},
		},
	},
	edit,
	save,
	icon: {
		foreground: '#005ffe',
		src: button,
	},
} as unknown as BlockConfiguration);
