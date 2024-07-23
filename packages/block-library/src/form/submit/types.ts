import {BlockCSSProperties} from '@mindspun/mrblx';

export type Props = {
	clientId: string;
	isSelected: boolean;
	attributes: {
		blockId: string;
		type: 'submit'|'reset';
		value: string | undefined;
		style: BlockCSSProperties;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};
