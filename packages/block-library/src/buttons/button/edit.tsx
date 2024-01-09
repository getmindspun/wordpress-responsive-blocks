import classNames from 'classnames';
import {RichText} from '@wordpress/block-editor';

import {useBlockPropsWithId, StylePortal} from '@mindspun/wpx';

import {Props} from './types';
import Controls from './controls/Controls';

export default function Edit(props: Props & { clientId: string }) {
    const blockProps = useBlockPropsWithId(props, {
        className: classNames(`variant-${props.attributes.variant}`, {
            'wp-element-button': props.attributes.variant !== 'link',
        })
    });

    return (
        <>
            <Controls {...props} />
            <StylePortal
                blockId={props.attributes.blockId}
                attributes={props.attributes.style}
            />
            <RichText
                {...blockProps}
                tagName={'a'}
                onChange={text => {
                    props.setAttributes({text})
                }}
                value={props.attributes.text}
                allowedFormats={[]}
                placeholder={'Button'}
            />
        </>
    );
}
