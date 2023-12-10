import {useBlockPropsWithId, StylePortal} from '@mindspun/wpx';

import './editor.scss';
import {Props} from './types';
import Controls from './Controls';
import PictureContents from './PictureContents';
import {getClassName} from './utils';

export default function Edit(props: Props & { clientId: string }) {
    const blockProps = useBlockPropsWithId(props, {
        className: getClassName(props.attributes.media)
    });

    /* Don't let picture element to be internally redrawn (or sometimes null) */
    return (
        <>
            <Controls {...props} />
            <StylePortal
                blockId={props.attributes.blockId}
                attributes={props.attributes.style}
            />
            <picture {...blockProps}>
                <PictureContents media={props.attributes.media} />
            </picture>
        </>
    );
}
