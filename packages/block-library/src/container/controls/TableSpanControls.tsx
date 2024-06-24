import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Props } from '../types';

const TableSpanControls = (props: Props) => {
	return (
		<>
			<NumberControl
				label={__('Column Span (colspan)')}
				value={props.attributes.tagAttrs.colspan}
				onChange={(colspan) => {
					const tagAttrs = {
						...props.attributes.tagAttrs,
						colspan: colspan ? parseInt(colspan) : undefined,
					};
					props.setAttributes({ tagAttrs });
				}}
				min={1}
			/>
			<NumberControl
				label={__('Row Span (rowspan)')}
				value={props.attributes.tagAttrs.rowspan}
				onChange={(rowspan) => {
					const tagAttrs = {
						...props.attributes.tagAttrs,
						rowspan: rowspan ? parseInt(rowspan) : undefined,
					};
					props.setAttributes({ tagAttrs });
				}}
				min={1}
			/>
		</>
	);
};

export default TableSpanControls;
