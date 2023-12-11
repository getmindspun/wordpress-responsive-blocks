import {useBlockPropsWithId} from '@mindspun/wpx';
import {Props} from './types';
import {getClassName} from './utils';

export default function save(props: { attributes: Props['attributes'] }) {
    const blockProps = useBlockPropsWithId.save(props, {
        className: getClassName(props.attributes)
    });

    return (
        <div {...blockProps}>
            <a
                className={props.attributes.variant !== 'link' ? 'wp-element-button' : undefined}
            >
                {props.attributes.text}
            </a>
        </div>
    );
}
