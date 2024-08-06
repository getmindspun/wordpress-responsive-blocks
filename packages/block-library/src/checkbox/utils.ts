import type { Props } from './types';

export function getClassName(props: { attributes: Props['attributes'] }) {
	return `mrblx-label-${props.attributes.labelPosition}`;
}

