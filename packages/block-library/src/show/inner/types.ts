export type Props = {
	clientId: string,
	attributes: {
		blockId: string;
		target: string;
		isDefault: boolean;
	};
	setAttributes: (props: Partial<Props['attributes']>) => void;
	context: { ['mindspun/defaultBlockId']: string };
};
