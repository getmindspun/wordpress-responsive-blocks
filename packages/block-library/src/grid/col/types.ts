import { BlockCSSProperties } from '@mindspun/wpx';

export type Colspan = {
	desktop: string;
	tablet: string | undefined;
	mobile: string | undefined;
};

export type Props = {
	attributes: {
		blockId: string;
		colspan: Colspan;
		style: BlockCSSProperties;
	};
	setAttributes: (props: Partial<Props['attributes']>) => void;
};
