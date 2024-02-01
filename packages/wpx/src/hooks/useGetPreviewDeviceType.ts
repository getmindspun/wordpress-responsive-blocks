import { useSelect } from '@wordpress/data';

export function useGetPreviewDeviceType(isResponsive?: boolean) {
	isResponsive = isResponsive !== undefined ? isResponsive : true;
	const { deviceType } = useSelect(
		(select) => {
			const selectors = select('core/edit-post') as {
				__experimentalGetPreviewDeviceType: () => string;
			} | null;

			return {
				deviceType:
					selectors && isResponsive
						? selectors.__experimentalGetPreviewDeviceType()
						: 'Desktop',
			};
		},
		[isResponsive]
	);

	return deviceType;
}
