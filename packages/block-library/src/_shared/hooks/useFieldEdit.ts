import {useEffect} from '@wordpress/element';
import type {LabelPosition} from '~shared/types';

type Attributes = {
    labelPosition: LabelPosition;
    labelRequiredIndicator: string | undefined;
}

export function useFieldEdit(props: {
    attributes: Attributes;
    setAttributes: (attributes: Partial<Attributes>) => void;
    context: {
        ['mindspun/formBlockId']: string | undefined,
        ['mindspun/labelPosition']: string | undefined,
        ['mindspun/labelRequiredIndicator']: string | undefined,
    }
}) {
    useEffect(() => {
        if (props.context['mindspun/labelPosition']) {
            props.setAttributes({
                labelPosition: props.context['mindspun/labelPosition'] as LabelPosition || 'top'
            });
        }
    }, [props.context['mindspun/labelPosition']]);

    useEffect(() => {
        if (props.context['mindspun/labelRequiredIndicator'] !== undefined) {
            props.setAttributes({
                labelRequiredIndicator: props.context['mindspun/labelRequiredIndicator'] as Attributes['labelRequiredIndicator']
            });
        }
    }, [props.context['mindspun/labelRequiredIndicator']]);
}