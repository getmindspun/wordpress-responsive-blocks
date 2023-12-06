import React from 'react';
import {useState} from '@wordpress/element';

import './TabbedControl.scss';
import {Button, IconType} from '@wordpress/components';

function findActive(children: React.ReactElement<TabContainerProps>[]) {
    for (let i=0; i < children.length; i++) {
        if (children[i].props.active) {
            return i;
        }
    }
    return 0;
}

export interface TabContainerProps {
    active?: boolean,
    icon?: IconType | null,
}

const TabbedControl = (props: {
    onSelect?: (value: React.Key) => void,
    children: React.ReactElement<TabContainerProps> | React.ReactElement<TabContainerProps>[]
}) => {
    const children = Array.isArray(props.children) ? props.children : [props.children];
    const [active, setActive] = useState(findActive(children));

    return (
        <div className={'wpx--tabbed-control'}>
            <div className={'wpx--tabbed-header'}>
                { children.map((child, index) => {
                    const key = child.key ? child.key : index;
                    return (
                        <div
                            key={key}
                            className={'wpx--tab' + (index === active ? ' wpx--tab-active' : '')}
                        >
                            <Button icon={child.props.icon} onClick={() => {
                                setActive(index);
                                props.onSelect && props.onSelect(key);
                            }}>
                                {child.props.icon ? child.key : key}
                            </Button>
                        </div>
                    );
                }) }
            </div>
            {children[active]}
        </div>
    );
}

export default TabbedControl;
