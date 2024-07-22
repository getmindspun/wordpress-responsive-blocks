import React from 'react';
import {hydrateRoot} from '@wordpress/element';
import Field from './Field';
import type {Props} from './types';

export function getClassName(props: {attributes: Props['attributes']}) {
    return `mrblx-label-${ props.attributes.labelPosition }`;
}

export function getBlockAttrsFromElement(element: HTMLElement, name: string = 'data-mrblx-attrs') {
    const attr = element.getAttribute(name);
    if (attr) {
        try {
            const result = JSON.parse(attr);
            element.removeAttribute(name);
            return result;
        } catch (e) {
            console.log(e);
        }
    }
    return {};
}

export function hydrateInputs() {
    document.querySelectorAll<HTMLDivElement>('.mrblx-form-group--input').forEach(div => {
        hydrateRoot(div, React.createElement(Field, {
            attributes: getBlockAttrsFromElement(div)
        }));
    });
}

// Sort the attributes so that the JSON always generates the same.
export function buildBlockAttrs(attributes: any) {
    const obj = {} as any;
    Object.keys(attributes).sort().map(key => {
        obj[key] = attributes[key];
    });
    return JSON.stringify(obj);
}