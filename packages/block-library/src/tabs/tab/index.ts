import { registerBlockType, BlockConfiguration } from '@wordpress/blocks';
import './style.scss';

import edit from './edit';
import save from './save';
import icon from './icon';

registerBlockType('mindspun/tab', {
    $schema: 'https://schemas.wp.org/trunk/block.json',
    apiVersion: 3,
    title: 'Tab',
    category: 'mindspun-responsive-blocks',
    description: 'A single tab in a tabbed container.',
    textdomain: 'wpx',
    parent: [
        'mindspun/tabs'
    ],
    attributes: {
        blockId: {
            type: 'string'
        },
        label: {
            type: 'string',
            default: 'Tab'
        },
        isDefault: {
            type: 'boolean'
        }
    },
    usesContext: [
        'mindspun/tabs'
    ],
    edit,
    save,
    icon: {
        foreground: '#005ffe',
        src: icon
    },

} as unknown as BlockConfiguration);
