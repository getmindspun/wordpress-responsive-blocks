import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';
import edit from './edit';
import save from './save';
import tabIcon from './TabIcon';

const icon = {
    foreground: '#005ffe',
    src: tabIcon
}

registerBlockType( metadata.name, { edit, save, icon} as any);
