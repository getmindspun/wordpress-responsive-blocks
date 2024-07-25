import { useEffect } from '@wordpress/element';
import type { LabelPosition } from '~shared/types';

type Attributes = {
	labelPosition: LabelPosition;
	labelRequiredIndicator: string | undefined;
};

export function useFieldEdit(props: {
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
	context: {
		['mindspun/formBlockId']: string | undefined;
		['mindspun/labelPosition']: LabelPosition | undefined;
		['mindspun/labelRequiredIndicator']: Attributes['labelRequiredIndicator'];
	};
}) {
	const labelPosition = props.context['mindspun/labelPosition'];
	const labelRequiredIndicator =
		props.context['mindspun/labelRequiredIndicator'];
	const { setAttributes } = props;

	useEffect(() => {
		if (labelPosition) {
			setAttributes({
				labelPosition: labelPosition ? labelPosition : 'top',
			});
		}
	}, [labelPosition, setAttributes]);

	useEffect(() => {
		if (labelRequiredIndicator !== undefined) {
			setAttributes({ labelRequiredIndicator });
		}
	}, [labelRequiredIndicator, setAttributes]);
}
