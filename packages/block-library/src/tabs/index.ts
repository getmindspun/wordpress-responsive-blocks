import {registerBlockType} from '@wordpress/blocks';

import './style.scss';

import edit from './edit';
import save from './save';
import metadata from './block.json';
import {DEFAULT_PRIMARY_COLOR} from './constants';

import tabsIcon from './TabsIcon';

const icon = {
    foreground: DEFAULT_PRIMARY_COLOR,
    src: tabsIcon
}

registerBlockType(metadata.name, {edit, save, icon} as any);
