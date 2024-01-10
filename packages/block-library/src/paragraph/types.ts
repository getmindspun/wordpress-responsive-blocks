import {BlockCSSProperties} from '@mindspun/wpx';

export type Props = {
	clientId: string,
	isSelected: boolean,
	attributes: {
		blockId: string,
		content: string,
		style: BlockCSSProperties
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
