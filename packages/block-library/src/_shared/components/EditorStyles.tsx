import React from 'react';

import { ElementsAttributes, CustomBlockConfiguration } from '~shared/types';
import { BlockCSSProperties, StylePortalClientId } from '@mindspun/mrblx';

interface BlockAttributes {
	[key: string]: { selector?: string };
}

const EditorStyles = (props: {
	clientId: string;
	attributes: Partial<ElementsAttributes>;
	metadata: CustomBlockConfiguration;
	keys: (keyof ElementsAttributes)[];
	children?: React.ReactNode;
}) => {
	return (
		<>
			{props.keys.map((key, index) => {
				const attributes = props.attributes[key] as BlockCSSProperties;
				const selector = (props.metadata.attributes as BlockAttributes)[
					key.toString()
				].selector;
				return (
					<StylePortalClientId
						key={`${index}`}
						clientId={props.clientId}
						attributes={attributes}
						selector={selector}
					/>
				);
			})}
			{props.children}
		</>
	);
};

export default EditorStyles;
