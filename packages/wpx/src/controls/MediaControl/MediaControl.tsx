import React from 'react';
import {MediaPlaceholder} from '@wordpress/block-editor';

import './MediaControl.scss';
import {ControlHeader} from '../../components';

function basename(str: string, sep: string = '/') {
    str = str.substring(str.lastIndexOf(sep) + 1);
    if (str.endsWith(')')) {
        str = str.substring(0, str.length - 1);
    }
    return str;
}

export type Media = {
    url?: string,
    id?: string,
    alt?: string,
    width?: number,
    height?: number,
}

export interface MediaControlProps {
    title?: string,
    help?: string,
    attributes: Media,
    setAttributes: (attributes: Partial<Media>) => void,
    children?: React.ReactNode;
}


const MediaControl = (props: MediaControlProps) => {

    const onSelect = (media: Media | null) => {
        if (!media || !media.url) {
            props.setAttributes({
                url: undefined,
                id: undefined,
                alt: undefined
            });
            return;
        }
        props.setAttributes(media);
    };

    const onClear = () => {
        onSelect(null);
    }

    return (
        <div
            className={'wpx--media-control'}
        >
            {!!props.title &&
                <ControlHeader
                    title={props.title}
                    onClear={props.attributes.url ? onClear : undefined}
                />
            }
            {!props.attributes.url ?
                <>
                    <MediaPlaceholder
                        labels={{title: ''}}
                        accept="image/*"
                        allowedTypes={['image']}
                        onSelect={media => onSelect(media as unknown as Media)}
                        multiple={false}
                        onHTMLDrop={() => {
                        }}
                    />
                    {!!props.help && <small>{props.help}</small>}
                </> :
                <div className="wpx--filename">{basename(props.attributes.url || '')}</div>
            }
            {!!props.children && props.children}
        </div>
    )
        ;
}

export default MediaControl;
