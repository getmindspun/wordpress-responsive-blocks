import {BlockCSSProperties, HeadingTag} from '@mindspun/wpx';
import {CSSProperties} from 'react';

export type DisplayProperties = {
	display: CSSProperties['display'],
	tabletDisplay: CSSProperties['display'],
	mobileDisplay: CSSProperties['display']
}

export type FlexDirectionProperties = {
	flexDirection: CSSProperties['flexDirection'],
	tabletFlexDirection: CSSProperties['flexDirection'],
	mobileFlexDirection: CSSProperties['flexDirection']
}

export type Props = {
	attributes: {
		blockId: string,
		tagName: HeadingTag,
		text: string,
		style: BlockCSSProperties & DisplayProperties & FlexDirectionProperties,
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
