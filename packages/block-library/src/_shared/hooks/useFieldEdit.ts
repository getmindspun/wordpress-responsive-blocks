import { useEffect } from '@wordpress/element';
import type { LabelPosition } from '~shared/types';

type Attributes = {
	labelPosition: LabelPosition;
	labelRequiredIndicator: string | undefined;
};

export function useLabelPosition(props: {
	attributes: { labelPosition: LabelPosition; };
	setAttributes: (attributes: Partial<{labelPosition: LabelPosition}>) => void;
	context: {
		['mindspun/labelPosition']: LabelPosition | undefined;
	};
}) {
	const labelPosition = props.context['mindspun/labelPosition'];
	const { setAttributes } = props;

	useEffect(() => {
		if (labelPosition) {
			setAttributes({
				labelPosition: labelPosition ? labelPosition : 'top',
			});
		}
	}, [labelPosition, setAttributes]);
}


export function useRequiredIndicator(props: {
	attributes: { labelRequiredIndicator: string | undefined };
	setAttributes: (attributes: Partial<{ labelRequiredIndicator: string | undefined }>) => void;
	context: {
		['mindspun/labelRequiredIndicator']: Attributes['labelRequiredIndicator'];
	};
}) {
	const labelRequiredIndicator =
		props.context['mindspun/labelRequiredIndicator'];
	const { setAttributes } = props;

	useEffect(() => {
		if (labelRequiredIndicator !== undefined) {
			setAttributes({ labelRequiredIndicator });
		}
	}, [labelRequiredIndicator, setAttributes]);
}

export function useFieldEdit(props: {
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
	context: {
		['mindspun/labelPosition']: LabelPosition | undefined;
		['mindspun/labelRequiredIndicator']: Attributes['labelRequiredIndicator'];
	};
}) {
	useLabelPosition(props);
	useRequiredIndicator(props);
}
