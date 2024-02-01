import { registerBlockType } from '@wordpress/blocks';
import { buttons } from '@wordpress/icons';

import './style.scss';
import edit from './edit';
import save from './save';
import metadata from './block.json';

import './button';

const icon = {
	foreground: '#005ffe',
	src: buttons,
};

registerBlockType(metadata.name, { edit, save, icon } as any);
