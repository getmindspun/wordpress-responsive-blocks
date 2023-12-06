import React from 'react';
import {useState} from '@wordpress/element';

import './ImageScaleControl.scss';
import {ControlHeader} from '../../components';
import {RangeControl} from '@wordpress/components';

export type ImageScaleControlProps = {
    label?: string;
    width: number | undefined;
    height: number | undefined;
    attributes: {
        scaledWidth: number | undefined
        scaledHeight: number | undefined
    };
    setAttributes: (attributes: Partial<ImageScaleControlProps['attributes']>) => void;
    min?: number,
    max?: number,
}

function headerHint(props: ImageScaleControlProps): string|undefined {

    if (props.width !== undefined && props.height !== undefined) {
        return `${props.attributes.scaledWidth !== undefined ? props.attributes.scaledWidth: props.width}x${props.attributes.scaledHeight !== undefined ? props.attributes.scaledHeight : props.height}`;
    }
    return undefined;
}

export function showClear(attributes: ImageScaleControlProps['attributes']) {
    return attributes.scaledWidth !== undefined || attributes.scaledHeight !== undefined;
}

const ImageScaleControl = (props: ImageScaleControlProps) => {
    const [isAdvanced, setIsAdvanced] = useState(false);

    function onChange(value: number|undefined) {
        const scaledHeight = value && props.width && props.height ? Math.round(value * props.height / props.width) : undefined;
        props.setAttributes({scaledWidth: value, scaledHeight});
    }

    function onClear() {
        props.setAttributes({scaledWidth: undefined, scaledHeight: undefined});
    }

    return (
        <div className="wpx--image-scale-control">
            <ControlHeader
                title={props.label}
                hint={ headerHint(props)}
                isAdvanced={ isAdvanced } onAdvancedChange={ setIsAdvanced }
                onClear={showClear(props.attributes) ? onClear : undefined}
            />
            <RangeControl
                max={props.max}
                min={props.min}
                onBlur={function noRefCheck() {
                }}
                onChange={onChange}
                onFocus={function noRefCheck() {
                }}
                onMouseLeave={function noRefCheck() {
                }}
                onMouseMove={function noRefCheck() {
                }}
                step={1}
                withInputField={isAdvanced}
                value={props.attributes.scaledWidth !== undefined ? props.attributes.scaledWidth : props.width}
            />
        </div>
    );
};

ImageScaleControl.defaultProps = {
    min: 24,
    max: 512,
}

export default ImageScaleControl;
