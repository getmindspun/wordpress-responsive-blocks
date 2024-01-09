import classNames from 'classnames';
import {useBlockPropsWithId} from '@mindspun/wpx';
import {Props} from './types';

export default function save(props: { attributes: Props['attributes'] }) {
    const variant = props.attributes.variant || 'primary';

    const blockProps = useBlockPropsWithId.save(props, {
        className: classNames(`variant-${variant}`, {
            'wp-element-button': variant !== 'link'
        })
    });

    const rel = props.attributes.rel.length > 0 ? props.attributes.rel.join(' ') : undefined;

    return (

            <a
                {...blockProps}
                href={props.attributes.href}
                target={props.attributes.target}
                rel={rel}
            >
                {props.attributes.text}
            </a>
    );
}
