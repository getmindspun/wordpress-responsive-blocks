import {RichText} from '@wordpress/block-editor';
import {useBlockPropsWithId} from '@mindspun/wpx';
import {Props} from './types';

export default function save(props: { attributes: Props['attributes'] }) {
    const tagName = props.attributes.tagName ? props.attributes.tagName : 'h2';

    return (
        <RichText.Content
            {...useBlockPropsWithId.save(props)}
            tagName={tagName}
            value={props.attributes.text}
        />
    );
}
