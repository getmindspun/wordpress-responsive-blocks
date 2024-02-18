import { CSSProperties } from 'react';

import { CustomSelectControl } from '@wordpress/components';

import './ListStyleTypeControl.scss';

export type ListStyleType = 'default' | 'none' | 'disc' | 'circle' | 'square';

type ListStyleTypeControlProps = {
	label?: string;
	value: ListStyleType | undefined;
	onChange: (value: ListStyleType | undefined) => void;
};

type ListStyleTypeOption = {
	key: ListStyleType;
	name: string;
	className?: string;
	style?: CSSProperties;
};

const OPTIONS = [
	{ key: 'default', name: 'Default' },
	{ key: 'none', name: 'None' },
	{ key: 'disc', name: 'Disc', className: 'mrblx--disk' },
	{ key: 'circle', name: 'Circle', className: 'mrblx--circle' },
	{ key: 'square', name: 'Square', className: 'mrblx--square' },
];

function findOption(key: ListStyleType | undefined) {
	if (!key) {
		return OPTIONS[0];
	}
	return OPTIONS.find((option) => option.key === key);
}

const ListStyleTypeControl = (props: ListStyleTypeControlProps) => {
	function onChange(option: ListStyleTypeOption) {
		if (!option || option.key === 'default') {
			props.onChange(undefined);
		} else {
			props.onChange(option.key);
		}
	}

	return (
		<div className="mrblx--list-style-type-control">
			<CustomSelectControl
				label={props.label}
				options={OPTIONS}
				onChange={({
					selectedItem,
				}: {
					selectedItem: ListStyleTypeOption;
				}) => onChange(selectedItem)}
				value={findOption(props.value)}
			/>
		</div>
	);
};

export default ListStyleTypeControl;
