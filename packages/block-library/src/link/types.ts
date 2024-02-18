import { Link } from '@mindspun/mrblx';

export type Props = {
	clientId: string;
	isSelected: boolean;
	attributes: {
		link: Link;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};
