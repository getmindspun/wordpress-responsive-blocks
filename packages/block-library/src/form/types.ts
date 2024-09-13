import { ElementsAttributes } from '~shared/types';

export type Props = {
	clientId: string;
	isSelected: boolean;
	attributes: ElementsAttributes & {
		method: string;
		action: string | undefined;
		encType:
			| 'application/form-data'
			| 'application/x-www-form-urlencoded'
			| 'application/json'
			| undefined;
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
};

export type FlashEventDetail = {
	form: HTMLFormElement;
	message: string;
	type?: string;
};
