import {CSSProperties} from 'react';

import BorderRadiusMulti from './BorderRadiusMulti';
import BorderRadiusValueControl from './BorderRadiusValueControl';
import {areAllBorderRadiiEqual} from './utils';

const BorderRadiusBaseControl = (props: {
    label?: string;
    attributes: CSSProperties,
    setAttributes: (attributes: CSSProperties) => void;
    isLinked: boolean,
    isAdvanced: boolean,
}) => {

    function onSingleChange(value: string | number | undefined) {
        if (value && ((typeof value === 'number') || (parseInt(value).toString() === value))) {
            value = value + 'px';
        }
        props.setAttributes({
            ...props.attributes,
            borderTopRightRadius: value,
            borderTopLeftRadius: value,
            borderBottomRightRadius: value,
            borderBottomLeftRadius: value
        })
    }

    return (
        <>
            { props.isLinked ?
                <BorderRadiusValueControl
                    title={props.label}
                    value={ areAllBorderRadiiEqual(props.attributes) ? props.attributes.borderTopLeftRadius : undefined }
                    onChange={ onSingleChange }
                    isAdvanced={props.isAdvanced}
                /> :
                <BorderRadiusMulti
                    label={props.label}
                    attributes={props.attributes}
                    setAttributes={props.setAttributes}
                    isAdvanced={ props.isAdvanced }
                />
            }
        </>
    );
};

BorderRadiusBaseControl.defaultProps = {
    disableUnlink: false,
};

export default BorderRadiusBaseControl;
