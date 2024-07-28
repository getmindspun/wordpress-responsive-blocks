import React from 'react';
import FieldError from './FieldError';

const FieldText = (props: {
	attributes: { help: string | undefined };
	fieldError?: string | null;
}) => {
	if (props.fieldError) {
		return <FieldError message={props.fieldError} />;
	}
	if (props.attributes.help) {
		return <small className={'field-help'}>{props.attributes.help}</small>;
	}
	return null;
};

export default FieldText;
