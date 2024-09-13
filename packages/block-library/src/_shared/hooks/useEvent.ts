import { useEffect } from '@wordpress/element';

export function useEvent(
	eventType: string,
	eventHandler: (event: Event) => void
) {
	useEffect(() => {
		window.addEventListener(eventType, eventHandler);
		return () => {
			window.removeEventListener(eventType, eventHandler); // this is called to remove it when the component 'unmounts' or the dependencies change, but the dependencies never change because you pass empty array
		};
	}, [eventType, eventHandler]);
}
