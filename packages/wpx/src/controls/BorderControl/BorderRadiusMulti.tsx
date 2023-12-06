import React, {CSSProperties} from 'react';

import BorderRadiusValueControl from './BorderRadiusValueControl';

function title(value: string): string {
    return value.substring(6, value.length - 6).replace(/pR|mR|pL|mL/, x => `${x.charAt(0)} ${x.charAt(1).toLowerCase()}`);
}

const BorderRadiusMulti = (props: {
    label?: string;
    attributes: CSSProperties,
    setAttributes: (attributes: CSSProperties) => void;
    isAdvanced: boolean;
}) => {

    return (
        <>
            { ['borderTopLeftRadius', 'borderBottomLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius'].map((key) => {
                const value = props.attributes[key as keyof CSSProperties];

                function onClear() {
                    props.setAttributes({
                        ...props.attributes,
                        [key]: undefined
                    });
                }

                return (
                    <BorderRadiusValueControl
                        title={ title(key) }
                        key={ key }
                        value={ value }
                        onChange={ (newValue) => {
                            props.setAttributes({...props.attributes, [key]: newValue})
                        } }
                        onClear={ value !== undefined ? onClear : undefined }
                        isAdvanced={props.isAdvanced}
                    />
                );
            }) }
        </>
    );
};

export default BorderRadiusMulti;
