import { registerBlockType } from '@wordpress/blocks';
import { unseen } from '@wordpress/icons';

import edit from './edit';
import save from './save';
import metadata from './block.json';

const icon = {
	foreground: '#005ffe',
	src: unseen,
};

registerBlockType(metadata.name, { edit, save, icon } as any);
