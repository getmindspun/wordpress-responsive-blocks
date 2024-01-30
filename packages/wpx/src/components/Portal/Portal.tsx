import React from 'react';
import { createPortal } from 'react-dom';
import {useEffect} from '@wordpress/element';

const Portal = (props: {
    children: React.ReactNode,
    selector: string|undefined,
    tagName?: string|undefined,
    id?: string|undefined;
    data?: Record<string, string>
}) => {
    const selector = props.selector ? props.selector : 'head';
    const tagName = props.tagName ? props.tagName : 'div';

    const mount = document.querySelector(selector);
    const el = document.createElement(tagName);

    if (props.id) {
        el.setAttribute('id', props.id)
    }
    if (props.data) {
        for (const [key, value] of Object.entries(props.data)) {
            el.setAttribute(`data-${key}`, value);
        }
    }

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
