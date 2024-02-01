import { registerBlockType } from '@wordpress/blocks';
import { paragraph } from '@wordpress/icons';

import './style.scss';
import edit from './edit';
import save from './save';
import metadata from './block.json';

const icon = {
	foreground: '#005ffe',
	src: paragraph,
};

registerBlockType(metadata.name, { edit, save, icon } as any);
