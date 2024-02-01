export type Props = {
	attributes: {
		blockId: string;
		label: string;
		isDefault: boolean;
	};
	setAttributes: (props: Partial<Props['attributes']>) => void;
	context: { ['mindspun/tabs']: Record<string, string> };
};
