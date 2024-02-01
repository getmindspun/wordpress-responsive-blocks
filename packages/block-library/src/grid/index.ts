import { registerBlockType } from '@wordpress/blocks';
import { grid } from '@wordpress/icons';

import './style.scss';
import edit from './edit';
import save from './save';
import metadata from './block.json';

import './row';
import './col';

const icon = {
	foreground: '#005ffe',
	src: grid,
};

registerBlockType(metadata.name, { edit, save, icon } as any);
