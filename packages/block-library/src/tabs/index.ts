import {registerBlockType} from '@wordpress/blocks';

import './style.scss';

import metadata from './block.json';
import edit from './edit';
import save from './save';
import icon from './icon';
import {DEFAULT_PRIMARY_COLOR} from './constants';

registerBlockType(metadata.name, {
    edit,
    save,
    icon: {
        foreground: DEFAULT_PRIMARY_COLOR,
        src: icon
    }
} as any);

import './tab/index';
