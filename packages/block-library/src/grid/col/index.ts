import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import { create } from '@wordpress/icons';

import edit from './edit';
import save from './save';

registerBlockType('mindspun/grid-col', {
	$schema: 'https://schemas.wp.org/trunk/block.json',
	apiVersion: 3,
	title: 'Grid Column',
	category: 'mindspun-responsive-blocks',
	description: 'A single column of a grid row.',
	textdomain: 'mrblx',
	parent: ['mindspun/grid-row'],
	attributes: {
		blockId: {
			type: 'string',
		},
		colspan: {
			type: 'object',
			default: {
				desktop: 'default',
			},
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
		src: create,
	},
} as unknown as BlockConfiguration);
