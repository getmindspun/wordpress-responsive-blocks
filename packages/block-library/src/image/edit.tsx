import { useBlockPropsWithId, StylePortalClientId } from '@mindspun/mrblx';

import './editor.scss';
import { Props } from './types';
import Controls from './Controls';
import PictureContents from './PictureContents';
import { getClassName } from './utils';

function isEmpty(props: Props) {
	return (
		!props.attributes.media.url &&
		!props.attributes.media.tabletUrl &&
		!props.attributes.media.mobileUrl
	);
}

export default function Edit(props: Props & { clientId: string }) {
	const blockProps = useBlockPropsWithId(props, {
		className: getClassName(props.attributes.media),
	});

	/* Don't let picture element to be internally redrawn (or sometimes null) */
	return (
		<>
			<Controls {...props} />
			<StylePortalClientId
				clientId={props.clientId}
				attributes={props.attributes.style}
			/>
			<picture {...blockProps}>
				{!isEmpty(props) ? (
					<PictureContents media={props.attributes.media} />
				) : (
					<img
						alt={'Not found'}
						src={
							'https://getmindspun.github.io/public/blocks/no-image-256x256.png'
						}
						width={256}
						height={256}
					/>
				)}
			</picture>
		</>
	);
}
