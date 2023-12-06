import './MarginControl.scss';

import {SpacingLonghand} from '../../types';

import MarginMultiControl from './MarginMultiControl';
import LengthControl from '../LengthControl/LengthControl';

import {MarginControlProps} from './MarginControl';
import {areAllMarginsEqual} from './utils';


const MarginBaseControl = (props: {
    attributes: MarginControlProps['attributes']
    setAttributes: (attributes: Partial<MarginControlProps['attributes']>) => void;
    isAdvanced: boolean,
    isLinked: boolean,
}) => {
    const isMixed = !(
        props.attributes.marginTop === props.attributes.marginRight &&
        props.attributes.marginTop === props.attributes.marginBottom &&
        props.attributes.marginTop === props.attributes.marginLeft
    );

    function onSingleValueChange(value: string | number| undefined) {
        props.setAttributes({marginTop: value, marginRight: value, marginBottom: value, marginLeft: value});
    }

    function onChange(value: SpacingLonghand) {
        props.setAttributes({
            marginTop: value.top,
            marginRight: value.right,
            marginBottom: value.bottom,
            marginLeft: value.left,
        });
    }

    function onClear() {
        onChange({});
    }

    return (
        <div className="wpx--margin-control">
            { props.isLinked ?
                <LengthControl
                    value={ areAllMarginsEqual(props.attributes) ? props.attributes.marginTop : undefined }
                    onChange={ onSingleValueChange }
                    onClear={ (isMixed || props.attributes.marginTop !== undefined) ? onClear : undefined }
                    isAdvanced={props.isAdvanced}
                /> :
                <MarginMultiControl
                    title={ 'Margin' }
                    attributes={props.attributes}
                    setAttributes={props.setAttributes}
                    isLinked={ props.isLinked }
                    isAdvanced={ props.isAdvanced }
                />
            }
        </div>
    );
};

export default MarginBaseControl;
