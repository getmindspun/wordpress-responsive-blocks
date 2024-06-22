import React from 'react';

import { useEffect, useState } from '@wordpress/element';

import { BlockCSSProperties } from '../../types';
import { useGetPreviewDeviceType } from '../../hooks';
import { buildCSS } from '../../functions';
import Portal from '../Portal/Portal';

const StylePortalClientId = (props: {
	clientId: string;
	selector?: string;
	attributes: BlockCSSProperties;
}) => {
	/* Keep data state so that portal doesn't internally recreate the element. */
	const [data, setData] = useState({ 'client-id': props.clientId });

	const deviceType = useGetPreviewDeviceType();
	const iframe = document.querySelector('iframe[name="editor-canvas"]');

	const id = `block-${props.clientId}`;
	const css = buildCSS(id, props.attributes, {
		selector: props.selector,
	});

	if (data['client-id'] !== props.clientId) {
		setData({ 'client-id': props.clientId });
	}

	useEffect(() => {
		if (iframe && css) {
			const doc = (iframe as HTMLIFrameElement).contentDocument;
			if (doc) {
				const el = doc.createElement('style');
				el.setAttribute('data-client-id', props.clientId);
				el.innerHTML = css;
				doc.head.appendChild(el);

				return () => {
					doc.head.removeChild(el);
				};
			}
		}
	}, [deviceType, iframe, props.clientId, props.attributes, css]);

	if (!css) {
		return null;
	}

	return (
		<Portal selector={'head'} tagName={'style'} data={data}>
			{css}
		</Portal>
	);
};

export default StylePortalClientId;
