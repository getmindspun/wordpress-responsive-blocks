import {CSSProperties} from 'react';

import {CustomSelectControl} from '@wordpress/components';
import {useState} from '@wordpress/element';

type FontAppearanceControlProps = {
    style: FontAppearance;
    onChange: (style: FontAppearance) => void;
}

export type FontAppearance = Pick<CSSProperties, 'fontWeight' | 'fontStyle'>;

type Option = {
    key: string,
    name: string,
    style: FontAppearance
}

const styles = {
    'Default': {fontWeight: undefined, fontStyle: undefined},
    'Thin': {fontWeight: 100, fontStyle: 'normal'},
    'Extra Light': {fontWeight: 200, fontStyle: 'normal'},
    'Light': {fontWeight: 300, fontStyle: 'normal'},
    'Regular': {fontWeight: 400, fontStyle: 'normal'},
    'Medium': {fontWeight: 500, fontStyle: 'normal'},
    'Semi Bold': {fontWeight: 600, fontStyle: 'normal'},
    'Bold': {fontWeight: 700, fontStyle: 'normal'},
    'Extra Bold': {fontWeight: 800, fontStyle: 'normal'},
    'Black': {fontWeight: 900, fontStyle: 'normal'},
    'Thin Italic': {fontWeight: 100, fontStyle: 'italic'},
    'Extra Light Italic': {fontWeight: 200, fontStyle: 'italic'},
    'Light Italic': {fontWeight: 300, fontStyle: 'italic'},
    'Regular Italic': {fontWeight: 400, fontStyle: 'italic'},
    'Medium Italic': {fontWeight: 500, fontStyle: 'italic'},
    'Semi Bold Italic': {fontWeight: 600, fontStyle: 'italic'},
    'Bold Italic': {fontWeight: 700, fontStyle: 'italic'},
    'Extra Bold Italic': {fontWeight: 800, fontStyle: 'italic'},
    'Black Italic': {fontWeight: 900, fontStyle: 'italic'},
} as {
    [key: string]: { fontWeight: number | undefined, fontStyle: 'normal' | 'italic' | undefined }
};

function asOptions(): Option[] {
    const result = [];
    for (const property in styles) {
        const style = styles[property];
        result.push({
            key: property,
            name: property,
            style
        });
    }
    return result;
}

const options = asOptions();

function find(fontWeight: number | undefined, fontStyle: 'normal' | 'italic' | undefined): Option {
    for (const item of options) {
        if (item.style.fontWeight === fontWeight && item.style.fontStyle === fontStyle) {
            return item;
        }
    }
    return options[0];
}

const FontAppearanceControl = (props: FontAppearanceControlProps) => {
    const [fontWeight, setFontWeight] = useState(props.style.fontWeight);
    const [fontStyle, setFontStyle] = useState(props.style.fontStyle);

    function onChange(option: Option) {
        setFontWeight(option.style.fontWeight);
        setFontStyle(option.style.fontStyle);
        props.onChange(option.style);
    }

    return (
        <div className="wpx--font-appearance-control">
            <CustomSelectControl
                label="Appearance"
                options={ asOptions() }
                onChange={ ({selectedItem}: { selectedItem: Option }) => onChange(selectedItem) }
                value={ find(fontWeight as number | undefined, fontStyle as 'normal' | 'italic' | undefined) }
                __nextUnconstrainedWidth
            />
        </div>
    );
};

export default FontAppearanceControl;
