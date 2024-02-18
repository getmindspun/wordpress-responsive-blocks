import React from 'react';
import classNames from 'classnames';
import { StylePortalClientId } from '@mindspun/mrblx';
import { ComponentProps } from '../types';

const Header = (props: ComponentProps) => {
	const className = classNames('mrblx--tabs', {
		[`mrblx--block-align-${props.attributes.header.blockAlign}`]:
			props.attributes.header.blockAlign !== undefined,
		[`mrblx--tablet-block-align-${props.attributes.header.tabletBlockAlign}`]:
			props.attributes.header.tabletBlockAlign !== undefined,
		[`mrblx--block-align-${props.attributes.header.mobileBlockAlign}`]:
			props.attributes.header.mobileBlockAlign !== undefined,
		'stack-on-mobile': props.attributes.stackOnMobile,
	});

	return (
		<>
			{props.setAttributes && (
				<StylePortalClientId
					clientId={props.clientId}
					attributes={props.attributes.header}
					selector={'.mrblx--tabs'}
				/>
			)}
			<ul className={className}>{props.children}</ul>
		</>
	);
};

export default Header;
