import React from 'react';
import {MediaPlaceholder} from '@wordpress/block-editor';
import {ToggleControl} from '@wordpress/components';

import './MediaControl.scss';
import {ControlHeader} from '../../components';
import {showClear, prop, basename, showOnValue} from './utils';
import {useGetPreviewDeviceType} from '../../hooks';

type MediaPlaceholderProps = {
    id: number
} & { [p: string]: any }

export type MediaSize = {
    width: number,
    height: number,
    url: string,
    orientation: string
}

export type Media = {
    url?: string,
    id?: string,
    alt?: string,
    width?: number,
    height?: number,
    sizes?: {
        [key: string]: MediaSize
    }
    showOnDesktop?: boolean,

    tabletUrl?: string,
    tabletId?: string,
    tabletAlt?: string,
    tabletWidth?: number,
    tabletHeight?: number,
    tabletSizes?: {
        [key: string]: MediaSize
    }
    showOnTablet?: boolean,

    mobileUrl?: string,
    mobileId?: string,
    mobileAlt?: string,
    mobileWidth?: number,
    mobileHeight?: number,
    mobileSizes?: {
        [key: string]: MediaSize
    }
    showOnMobile?: boolean,
}

export interface MediaControlProps {
    title?: string,
    help?: string,
    attributes: Media,
    setAttributes: (attributes: Partial<Media>) => void,
    isResponsive?: boolean,
}


const MediaControl = (props: MediaControlProps) => {
    const deviceType = useGetPreviewDeviceType();

    const onSelect = (media: MediaPlaceholderProps | null) => {
        if (!media || !media.url) {
            props.setAttributes({
                [prop('url', deviceType)]: undefined,
                [prop('id', deviceType)]: undefined,
                [prop('alt', deviceType)]: undefined,
                [prop('width', deviceType)]: undefined,
                [prop('height', deviceType)]: undefined,
                [prop('sizes', deviceType)]: undefined,
            });
            return;
        }
        props.setAttributes({
            [prop('url', deviceType)]: media.url,
            [prop('id', deviceType)]: media.id,
            [prop('alt', deviceType)]: media.alt,
            [prop('width', deviceType)]: media.width,
            [prop('height', deviceType)]: media.height,
            [prop('sizes', deviceType)]: media.sizes,
        });
    };

    const onClear = () => {
        onSelect(null);
    }

    return (
        <div
            className={'wpx--media-control'}
        >
            <ControlHeader
                title={props.title}
                onClear={showClear(props.attributes, deviceType) ? onClear : undefined}
                isResponsive={props.isResponsive}
            />
            {!props.attributes[prop('url', deviceType)] ?
                <>
                    <MediaPlaceholder
                        labels={{title: ''}}
                        accept="image/*"
                        allowedTypes={['image']}
                        onSelect={media => onSelect(media)}
                        multiple={false}
                        onHTMLDrop={() => {
                        }}
                    />
                    {!!props.help && <small>{props.help}</small>}
                </> :
                <div
                    className="wpx--filename">{basename(props.attributes[prop('url', deviceType)] as string || '')}</div>
            }
            <ToggleControl
                label={`Show on ${deviceType}`}
                checked={showOnValue(props.attributes, deviceType)}
                onChange={isChecked => {
                    props.setAttributes({
                        [prop('showOn', deviceType)]: isChecked
                    });
                }}
            />
        </div>
    );
}

export default MediaControl;
