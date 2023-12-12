import {useInnerBlocksProps} from '@wordpress/block-editor';
import {useBlockPropsWithId} from '@mindspun/wpx';
import {Props} from './types';
import Header from './components/Header';
import Tab from './components/Tab';
import React from 'react';

export default function save(props: { attributes: Props['attributes'] }) {
    const blockProps = useBlockPropsWithId.save(props);
    const innerBlocksProps = useInnerBlocksProps.save({
        className: 'wpx--tab-contents'
    });

    return (
        <div {...blockProps}>
            <Header {...props}>
                {
                    Object.keys(props.attributes.labels || []).map((label, index) => {
                        const blockId = props.attributes.labels[label];
                        return (
                            <Tab
                                blockId={blockId}
                                label={label}
                                isActive={index === 0}
                            />
                        );
                    })
                }
            </Header>
            <div {...innerBlocksProps} />
        </div>
    );
}