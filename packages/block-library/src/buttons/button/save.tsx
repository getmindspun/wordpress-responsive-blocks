import classNames from 'classnames';
import {useBlockPropsWithId} from '@mindspun/wpx';
import {Props} from './types';

export default function save(props: { attributes: Props['attributes'] }) {
    const blockProps = useBlockPropsWithId.save(props, {
        className: classNames(`variant-${props.attributes.variant}`, {
            'wp-element-button': props.attributes.variant !== 'link'
        })
    });

    return (

            <a
                {...blockProps}
                href={props.attributes.href}
                target={props.attributes.target}
                rel="noopener"
            >
                {props.attributes.text}
            </a>
    );
}
