import { type BlockConfiguration } from '@wordpress/blocks';
import { blockDefault } from '@wordpress/icons';

import { registerInnerBlock } from '~shared/utils';

import edit from './edit';
import save from './save';

export const BLOCK_NAME = 'mindspun/show-hide-inner';

registerInnerBlock({
	name: BLOCK_NAME,
	title: 'Inner Block',
	description: 'A block that can be conditionally shown or hidden.',
	parent: ['mindspun/show-hide'],
	attributes: {
		blockId: {
			type: 'string',
		},
		target: {
			type: 'string',
		},
		isDefault: {
			type: 'boolean',
			default: true,
		},
	},
	edit,
	save,
	icon: {
		foreground: '#005ffe',
		src: blockDefault,
	},
	usesContext: ['mindspun/defaultBlockId'],
} as unknown as BlockConfiguration);
