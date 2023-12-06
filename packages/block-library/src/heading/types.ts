import {BlockCSSProperties, HeadingTag} from '@mindspun/wpx';

export type Props = {
	attributes: {
		blockId: string,
		tagName: HeadingTag,
		text: string,
		style: BlockCSSProperties
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}

export interface ComponentProps {
	attributes: Props['attributes'];
	setAttributes?: Props['setAttributes'];
}

export interface ComponentPropsWithChildren extends ComponentProps {
	children?: React.ReactNode
}
