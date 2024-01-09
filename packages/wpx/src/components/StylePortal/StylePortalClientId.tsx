import React from 'react';

import {useEffect} from '@wordpress/element';

import {BlockCSSProperties} from '../../types';
import {useGetPreviewDeviceType} from '../../hooks';
import {buildCSS} from '../../functions';
import Portal from '../Portal/Portal';

const StylePortalClientId = (props: {
	clientId: string,
	selector?: string,
	attributes: BlockCSSProperties
}) => {
	const deviceType = useGetPreviewDeviceType();
	const iframe = document.querySelector('iframe[name="editor-canvas"]');

	const id = `block-${props.clientId}`;
	const css = buildCSS(id, props.attributes, {
		selector: props.selector
	});
	const styleId = `style-${id}`;

	useEffect(() => {
		if (iframe && css) {
			const doc = (iframe as HTMLIFrameElement).contentDocument;
			if (doc) {
				const el = doc.createElement('style');
				el.setAttribute('id', styleId)
				el.innerHTML = css;
				doc.head.appendChild(el);

				return () => {
					doc.head.removeChild(el);
				}
			}
		}
	}, [deviceType, iframe, props.clientId, props.attributes])

	if (!css) {
		return null;
	}

	return (
		<Portal selector={'head'} tagName={'style'} id={styleId} >{css}</Portal>
	);
}

export default StylePortalClientId;
