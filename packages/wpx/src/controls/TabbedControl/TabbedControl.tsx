import React from 'react';

import './TabbedControl.scss';
import {Button, IconType} from '@wordpress/components';
import {useControlState} from '../../hooks';

function findActiveIndex(key: React.Key, children: React.ReactElement<TabContainerProps>[]) {
    for (let i=0; i < children.length; i++) {
        const childKey = children[i].key ? children[i].key : i;
        if (childKey === key) {
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
    name?: string|number,
    onSelect?: (value: React.Key) => void,
    children: React.ReactElement<TabContainerProps> | React.ReactElement<TabContainerProps>[]
}) => {
    const name = props.name ? props.name : 'tab';
    const children = Array.isArray(props.children) ? props.children : [props.children];
    const [controlState, setControlState] = useControlState(name);

    const activeIndex = findActiveIndex(controlState, children);
    return (
        <div className={'wpx--tabbed-control'}>
            <div className={'wpx--tabbed-header'}>
                { children.map((child, index) => {
                    const key = child.key ? child.key : index;
                    return (
                        <div
                            key={key}
                            className={'wpx--tab' + (index === activeIndex ? ' wpx--tab-active' : '')}
                        >
                            <Button icon={child.props.icon} onClick={() => {
                                setControlState(key);
                                props.onSelect && props.onSelect(key);
                            }}>
                                {child.props.icon ? child.key : key}
                            </Button>
                        </div>
                    );
                }) }
            </div>
            {children[activeIndex]}
        </div>
    );
}

export default TabbedControl;
