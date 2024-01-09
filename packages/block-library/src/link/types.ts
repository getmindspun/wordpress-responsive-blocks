import {Link} from '@mindspun/wpx';

export type Props = {
	clientId: string,
	isSelected: boolean,
	attributes: {
		link: Link
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}
