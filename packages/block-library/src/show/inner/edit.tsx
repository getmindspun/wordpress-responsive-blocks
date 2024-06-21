import { useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { useBlockPropsWithId } from '@mindspun/mrblx';

import { Props } from './types';
import Controls from './Controls';
import classNames from 'classnames';
import { useSelect } from '@wordpress/data';
import type { BlockInstance } from '@wordpress/blocks';

function useIsActive(clientId: string): boolean {
	return useSelect(
		(select) => {
			const block = (
				select('core/block-editor') as {
					getSelectedBlock: () => BlockInstance | null;
				}
			).getSelectedBlock();

			if (block?.clientId === clientId) {
				return true;
			}

			if (block) {
				const parents = (
					select('core/block-editor') as {
						getBlockParents: (clientId: string) => string[];
					}
				).getBlockParents(block.clientId);
				for (const parentClientId of parents) {
					if (parentClientId === clientId) {
						return true;
					}
				}
			}
			return false;
		},
		[clientId]
	);
}

export default function Edit(props: Props) {
	const active = useIsActive(props.clientId);
	const className = classNames({
		'mrblx--default': props.attributes.isDefault,
		'mrblx--active': active,
	});

	const blockProps = useBlockPropsWithId(props, { className });
	const innerBlocksProps = useInnerBlocksProps(blockProps);

	useEffect(() => {
		props.setAttributes({
			isDefault:
				!!props.attributes.blockId &&
				props.context['mindspun/defaultBlockId'] ===
					props.attributes.blockId,
		});
	}, [props]);

	return (
		<>
			<Controls {...props} />
			<div {...innerBlocksProps} />
		</>
	);
}
