import {useBlockPropsWithId} from '@mindspun/wpx';

import {Props} from './types';
import PictureContents from './PictureContents';
import {getClassName} from './utils';

export default function save(props: { attributes: Props['attributes'] }) {
    const blockProps = useBlockPropsWithId.save(props, {
        className: getClassName(props.attributes.media)
    })
    return (
        <picture {...blockProps}>
            <PictureContents media={props.attributes.media} />
        </picture>
    );
}
