import { type BlockInstance } from '@wordpress/blocks';

export function tabsToLabels(tabs: BlockInstance[]): Record<string, string> {
	const labels = {} as Record<string, string>;
	for (const tab of tabs) {
		labels[tab.attributes.label as string] = tab.attributes.blockId;
	}
	return labels;
}

export function labelsEqual(
	a: Record<string, string>,
	b: Record<string, string>
) {
	// key/value comparison where order matters.
	return JSON.stringify(a) === JSON.stringify(b);
}
