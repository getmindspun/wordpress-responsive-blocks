import {CSSProperties} from 'react';
import {FontSizePicker} from '@wordpress/components';

import './FontSizeControl.scss';
import FontSizes from './FontSizes';

export interface FontSizeControlProps {
    value: CSSProperties['fontSize'];
    onChange: (fontSize: CSSProperties['fontSize']) => void;
}

const FontSizeControl = (props: FontSizeControlProps) => {
    return (
        <div className="wpx--font-size-control">
            <FontSizePicker
                __nextHasNoMarginBottom
                fontSizes={ FontSizes }
                value={ props.value }
                onChange={ (fontSize) => {
                    props.onChange(fontSize);
                } }
            />
        </div>
    );
};

export default FontSizeControl;
