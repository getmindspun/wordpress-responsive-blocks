import React from 'react';
import { createPortal } from 'react-dom';
import {useEffect} from '@wordpress/element';

const Portal = (props: {
    children: React.ReactNode,
    selector: string|undefined,
    tagName?: string|undefined
}) => {
    const selector = props.selector ? props.selector : 'head';
    const tagName = props.tagName ? props.tagName : 'div';

    const mount = document.querySelector(selector);
    const el = document.createElement(tagName);

    useEffect(() => {
        if (mount) {
            mount.appendChild(el);
            return () => {
                mount.removeChild(el);
            }
        }
    }, [el, mount]);

    return createPortal(props.children, el)
};

export default Portal;
