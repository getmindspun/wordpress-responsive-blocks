import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

import { Props } from './types';
import Controls from './Controls';
import classNames from 'classnames';

export default function Edit(props: Props) {
	const [focused, setFocused] = useState(false);
	const blockProps = useBlockProps({
		className: classNames({
			'mrblx--focused': focused,
		}),
	});
	const innerBlocksProps = useInnerBlocksProps(
		blockProps as Record<string, any>
	);

	return (
		<>
			<Controls
				{...props}
				onMouseEnter={() => setFocused(true)}
				onMouseLeave={() => setFocused(false)}
			/>
			<div {...innerBlocksProps} />
		</>
	);
}
