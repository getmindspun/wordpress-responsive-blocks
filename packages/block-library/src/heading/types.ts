import {BlockCSSProperties} from 'wpx';

export type Props = {
	attributes: BlockCSSProperties & {
		blockId: string
	};
	setAttributes: (attributes: Partial<Props['attributes']>) => void
}

export interface ComponentProps {
	attributes: Props['attributes'];
	setAttributes?: Props['setAttributes'];
}

export interface ComponentPropsWithChildren extends ComponentProps {
	children?: React.ReactNode
}
