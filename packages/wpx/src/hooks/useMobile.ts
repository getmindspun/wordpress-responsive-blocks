import { useEffect, useState } from '@wordpress/element';

export function useMobile(): boolean {
	const [mobile, setMobile] = useState(window.innerWidth < 650);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < 650) {
				setMobile(true);
			} else {
				setMobile(false);
			}
		});
	});

	return mobile;
}
