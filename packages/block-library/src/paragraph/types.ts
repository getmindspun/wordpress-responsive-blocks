import {BlockCSSProperties} from '@mindspun/wpx';

export type Props = {
	clientId: string,
	isSelected: boolean,
	attributes: {
		blockId: string,
		text: string,
		style: BlockCSSProperties
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
