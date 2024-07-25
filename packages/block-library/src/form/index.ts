import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';
import metadata from './block.json';

import './submit';

const icon = {
	foreground: '#005ffe',
	src: 'forms',
};

registerBlockType(metadata.name, { edit, save, icon } as any);
