import './PaddingControl.scss';

import {SpacingLonghand} from '../../types';

import PaddingMultiControl from './PaddingMultiControl';
import LengthControl from '../LengthControl/LengthControl';

import {PaddingControlProps} from './PaddingControl';
import {CSSProperties} from 'react';
import {areAllPaddingsEqual} from './utils';

function anySet(attributes: CSSProperties) {
    return (attributes.paddingTop !== undefined) ||
        (attributes.paddingRight !== undefined) ||
        (attributes.paddingBottom !== undefined) ||
        (attributes.paddingLeft !== undefined);
}

const PaddingBaseControl = (props: {
    attributes: PaddingControlProps['attributes']
    setAttributes: (attributes: Partial<PaddingControlProps['attributes']>) => void;
    isAdvanced: boolean,
    isLinked: boolean,
}) => {
    function onSingleValueChange(value: string | number | undefined) {
        props.setAttributes({paddingTop: value, paddingRight: value, paddingBottom: value, paddingLeft: value});
    }

    function onChange(value: SpacingLonghand) {
        props.setAttributes({
            paddingTop: value.top,
            paddingRight: value.right,
            paddingBottom: value.bottom,
            paddingLeft: value.left,
        });
    }

    function onClear() {
        onChange({});
    }

    return (
        <div className="wpx--padding-control">
            { props.isLinked ?
                <LengthControl
                    value={ areAllPaddingsEqual(props.attributes) ? props.attributes.paddingTop : undefined }
                    onChange={ onSingleValueChange }
                    onClear={ anySet(props.attributes) ? onClear : undefined }
                    isAdvanced={props.isAdvanced}
                /> :
                <PaddingMultiControl
                    title={ 'Padding' }
                    attributes={props.attributes}
                    setAttributes={props.setAttributes}
                    isLinked={ props.isLinked }
                    isAdvanced={ props.isAdvanced }
                />
            }
        </div>
    );
};

export default PaddingBaseControl;
