import {registerBlockType} from '@wordpress/blocks';
import {addTemplate} from '@wordpress/icons';

import './style.scss';
import edit from './edit';
import save from './save';
import metadata from './block.json';
import {Props} from './types';

const icon =

registerBlockType( metadata.name, {
    edit,
    save,
    icon: {
        foreground: '#005ffe',
        src: addTemplate
    },
    __experimentalLabel: ( attributes: Props['attributes'] ) => {
        return (attributes.tagName === 'section' ? 'Section' : 'Container');
    }
} as any );
