import { Media } from '@mindspun/wpx';
import { defaultMedia, getMediaSizes } from './utils';

const PictureContents = (props: { media: Media }) => {
	const { media, ...blockProps } = props;

	const base = defaultMedia(media);
	if (!base) {
		return null;
	}

	const seen = {} as { [key: number]: true };
	// https://stackoverflow.com/a/53065007
	return (
		<>
			{media.mobileUrl &&
				getMediaSizes(media, 'Mobile').map((size) => {
					seen[size.width] = true;
					return (
						<source
							key={size.width}
							srcSet={size.url}
							media={`(max-width: ${size.width}px)`}
						/>
					);
				})}
			{media.tabletUrl &&
				getMediaSizes(media, 'Tablet')
					.map((size) => {
						if (!seen[size.width]) {
							return (
								<source
									key={size.width}
									srcSet={size.url}
									media={`(max-width: ${size.width}px)`}
								/>
							);
						}
						return null;
					})
					.filter((v) => v !== null)}
			<img
				className={`wp-image-${base.id}`}
				id={base.id}
				alt={base.alt || ''}
				src={base.url}
				width={base.width}
				height={base.height}
			/>
		</>
	);
};

export default PictureContents;
