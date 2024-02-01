import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import { row } from '@wordpress/icons';

import edit from './edit';
import save from './save';

registerBlockType('mindspun/grid-row', {
	$schema: 'https://schemas.wp.org/trunk/block.json',
	apiVersion: 3,
	title: 'Grid Row',
	category: 'mindspun-responsive-blocks',
	description: 'A row in the grid layout',
	textdomain: 'wpx',
	parent: ['mindspun/grid'],
	attributes: {
		blockId: {
			type: 'string',
		},
		style: {
			type: 'object',
			default: {},
		},
	},
	usesContext: ['mindspun/grid'],
	edit,
	save,
	icon: {
		foreground: '#005ffe',
		src: row,
	},
} as unknown as BlockConfiguration);
