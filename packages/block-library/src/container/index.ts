import { capitalCase } from 'change-case';
import { registerBlockType } from '@wordpress/blocks';
import { addTemplate } from '@wordpress/icons';

import './style.scss';
import edit from './edit';
import save from './save';
import metadata from './block.json';
import { Props } from './types';

registerBlockType(metadata.name, {
	edit,
	save,
	icon: {
		foreground: '#005ffe',
		src: addTemplate,
	},
	__experimentalLabel: (attributes: Props['attributes']) => {
		if (!attributes.tagName || attributes.tagName === 'div') {
			return 'Container';
		}
		switch (attributes.tagName) {
			case 'thead':
				return 'Table Header';
			case 'tfoot':
				return 'Table Footer';
			case 'th':
				return 'Table Header Cell';
			case 'td':
				return 'Table Cell';
		}
		return capitalCase(attributes.tagName);
	},
} as any);
