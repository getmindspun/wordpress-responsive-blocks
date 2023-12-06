import {FontSizePicker} from '@wordpress/components';

import {BlockCSSProperties} from '../../types';

import './FontSizeControl.scss';
import FontSizes from './FontSizes';
import {useGetPreviewDeviceType} from '../../hooks';

export interface FontSizeResponsiveControlProps {
    attributes: Pick<BlockCSSProperties, 'fontSize' | 'mobileFontSize' | 'tabletFontSize'>,
    setAttributes: (values: Partial<FontSizeResponsiveControlProps['attributes']>) => void;
}

const FontSizeControl = (props: FontSizeResponsiveControlProps) => {
    const deviceType = useGetPreviewDeviceType();

    return (
        <div className="wpx--font-size-control">
            {deviceType === 'Desktop' &&
                <FontSizePicker
                    __nextHasNoMarginBottom
                    fontSizes={FontSizes}

                    value={props.attributes.fontSize}
                    onChange={(fontSize) => {
                        props.setAttributes({fontSize});
                    }}
                />
            }
            {deviceType === 'Tablet' &&
                <FontSizePicker
                    __nextHasNoMarginBottom
                    fontSizes={FontSizes}

                    value={props.attributes.tabletFontSize}
                    onChange={(tabletFontSize) => {
                        props.setAttributes({tabletFontSize});
                    }}
                />
            }
            {deviceType === 'Mobile' &&
                <FontSizePicker
                    __nextHasNoMarginBottom
                    fontSizes={FontSizes}

                    value={props.attributes.mobileFontSize}
                    onChange={(mobileFontSize) => {
                        props.setAttributes({mobileFontSize});
                    }}
                />
            }
        </div>
    );
};

export default FontSizeControl;
