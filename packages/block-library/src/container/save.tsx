import React from 'react';
import {useInnerBlocksProps} from '@wordpress/block-editor';
import {useBlockPropsWithId} from '@mindspun/wpx';
import {Props} from './types';
import {getClassName} from './utils';

function javascript(link: string) {
    return `javascript:window.location.href='${link}'` as unknown as React.MouseEventHandler<HTMLDivElement>;
}

export default function save(props: { attributes: Props['attributes'] }) {
    const blockProps = useBlockPropsWithId.save(props, {
        className: getClassName(props.attributes)
    })
    const innerBlocksProps = useInnerBlocksProps.save(blockProps);
    return (

        <div
            {...innerBlocksProps}
            role={props.attributes.link ? 'button' : undefined}
            tabIndex={props.attributes.link ? 0 : undefined}
            onClick={props.attributes.link ? javascript(props.attributes.link) : undefined}
        />
    );
}
