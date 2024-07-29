import {useBlockProps} from '@wordpress/block-editor';
import type {Props} from './types';
import Controls from './Controls';

const Edit = (props: Props) => {
    return (
        <>
            <Controls {...props} />
            <input {...useBlockProps()} type={'hidden'} name={props.attributes.name} value={props.attributes.value}/>
        </>
    );
};

export default Edit;
