import {BlockConfiguration} from '@wordpress/blocks';
import {button} from '@wordpress/icons';

import edit from './edit';
import save from './save';
import {registerInnerBlock} from '../../../utils';

export const BLOCK_NAME = 'mindspun/button';

registerInnerBlock({
    name: BLOCK_NAME,
    title: 'Button',
    description: 'A single button in a button group.',
    parent: [
        'mindspun/buttons'
    ],
    attributes: {
        blockId: {
            type: 'string'
        },
        fullWidth: {
            type: 'boolean',
            default: false
        },
        variant: {
            type: 'string'
        },
        text: {
            type: 'string'
        },
        href: {
            type: 'string'
        },
        target: {
            type: 'string'
        },
        style: {
            type: 'object',
            default: {}
        }
    },
    usesContext: [
        'mindspun/buttons'
    ],
    edit,
    save,
    icon: {
        foreground: '#005ffe',
        src: button
    },
} as unknown as BlockConfiguration);