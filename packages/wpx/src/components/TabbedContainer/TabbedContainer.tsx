import React from 'react';
import {IconType} from '@wordpress/components';

const TabbedContainer = (props: {
    icon?: IconType | null,
    children: React.ReactNode
}) => {
    return (
        <div className={'wpx--tabbed-container'}>
            {props.children}
        </div>
    );
}

export default TabbedContainer;
