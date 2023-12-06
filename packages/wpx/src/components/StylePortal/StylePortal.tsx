import React from 'react';

import {useEffect} from '@wordpress/element';

import {BlockCSSProperties} from '../../types';
import {useGetPreviewDeviceType} from '../../hooks';
import {buildCSS} from '../../functions';
import Portal from '../Portal/Portal';

const StylePortal = (props: {
	blockId: string,
	selector: string,
	attributes: BlockCSSProperties
	idPrefix?: string,
}) => {
	const deviceType = useGetPreviewDeviceType();
	const iframe = document.querySelector('iframe[name="editor-canvas"]');
	
	const css = buildCSS(`${props.idPrefix ? props.idPrefix : 'wpx'}-${props.blockId}`, props.selector, props.attributes)

	useEffect(() => {
		if (iframe) {
			const doc = (iframe as HTMLIFrameElement).contentDocument;
			if (doc) {
				const el = doc.createElement('style');
				el.innerHTML = css;
				doc.head.appendChild(el);

				return () => {
					doc.head.removeChild(el);
				}
			}
		}
	}, [deviceType, iframe, props.attributes])

	return (
		<Portal selector={'head'} tagName={'style'} >{css}</Portal>
	);
}

export default StylePortal;
