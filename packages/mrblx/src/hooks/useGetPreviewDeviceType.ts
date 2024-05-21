import { useSelect } from '@wordpress/data';

export function useGetPreviewDeviceType(isResponsive?: boolean) {
	isResponsive = isResponsive !== undefined ? isResponsive : true;
	const { deviceType } = useSelect(
		(select) => {
			if (!isResponsive) {
				return { deviceType: 'Desktop' };
			}

			const editor = select('core/editor') as {
				getDeviceType: () => string;
			} | null;

			if (editor && editor.getDeviceType) {
				return { deviceType: editor.getDeviceType() };
			}

			const editPost = select('core/edit-post') as {
				__experimentalGetPreviewDeviceType: () => string;
			} | null;

			return {
				deviceType: editPost
					? editPost.__experimentalGetPreviewDeviceType()
					: 'Desktop',
			};
		},
		[isResponsive]
	);

	return deviceType;
}
