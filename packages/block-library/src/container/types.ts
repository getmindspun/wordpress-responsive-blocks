import {BlockCSSProperties, HeadingTag} from '@mindspun/wpx';
import {CSSProperties} from 'react';

export type DisplayControlAttributes = {
	display: CSSProperties['display'],
	tabletDisplay: CSSProperties['display'],
	mobileDisplay: CSSProperties['display']
}

export type Props = {
	attributes: {
		blockId: string,
		tagName: HeadingTag,
		text: string,
		style: BlockCSSProperties & DisplayControlAttributes,
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
