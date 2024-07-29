export type Attributes = {
	name: string | undefined;
	value: string | undefined;
}

export type Props = {
	clientId: string;
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
};
