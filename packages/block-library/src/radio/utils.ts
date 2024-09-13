import type { Props } from './types';
import { OptionWithSelected } from '~shared/types';

export function getClassName(props: { attributes: Props['attributes'] }) {
	return `mrblx-label-${props.attributes.labelPosition}`;
}

export function getDefaultValue(options: OptionWithSelected[]) {
	for (const option of options) {
		if (option.selected) {
			return option.value;
		}
	}
	return undefined;
}
