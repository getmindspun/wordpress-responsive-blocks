const RequiredIndicator = (props: {
	isRequired: boolean;
	text: string | null | undefined;
}) => {
	if (!props.text || !props.isRequired) {
		return null;
	}
	return (
		<>
			&nbsp;
			<span className={'mrblx-required-indicator'}>{props.text}</span>
		</>
	);
};

export default RequiredIndicator;
