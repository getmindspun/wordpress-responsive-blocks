import {CSSProperties} from 'react';

import {CustomSelectControl} from '@wordpress/components';

import './FontAppearanceControl.scss';
import ControlHeader from '../../components/ControlHeader/ControlHeader';
import {BlockCSSProperties} from '../../types';

export type FontAppearanceControlProps = {
    attributes: Pick<BlockCSSProperties, 'fontStyle' | 'fontWeight'>;
    setAttributes: (attributes: Partial<FontAppearanceControlProps['attributes']>) => void;
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
    function onChange(option: Option) {
        props.setAttributes({
            fontStyle: option.style.fontStyle,
            fontWeight: option.style.fontWeight
        })
    }

    function onClear() {
        props.setAttributes({
            fontStyle: undefined,
            fontWeight: undefined
        });
    }

    return (
        <div className="wpx--font-appearance-control">
            <ControlHeader
                title="Appearance"
                onClear={(props.attributes.fontWeight !== undefined || props.attributes.fontStyle !== undefined) ? onClear : undefined}
            />
            <CustomSelectControl
                label={undefined}
                options={ asOptions() }
                onChange={ ({selectedItem}: { selectedItem: Option }) => onChange(selectedItem) }
                value={ find(props.attributes.fontWeight as number | undefined, props.attributes.fontStyle as 'normal' | 'italic' | undefined) }
                __nextUnconstrainedWidth
            />
        </div>
    );
};

export default FontAppearanceControl;
