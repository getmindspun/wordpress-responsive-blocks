import { useDispatch } from '@wordpress/data';

export function useSetPreviewDeviceType() {
	const editor = useDispatch('core/editor') as {
		setDeviceType: (value: string) => void;
	};

	const editPost = useDispatch('core/edit-post') as {
		__experimentalSetPreviewDeviceType: (value: string) => void;
	};

	return (value: string) => {
		if (editor.setDeviceType) {
			editor.setDeviceType(value);
		} else {
			editPost.__experimentalSetPreviewDeviceType(value);
		}
	};
}
