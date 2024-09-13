import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';

import './submit';

registerBlockType(metadata.name, {
	edit,
	save,
	icon: {
		foreground: '#005ffe',
		src: icon,
	},
} as any);
