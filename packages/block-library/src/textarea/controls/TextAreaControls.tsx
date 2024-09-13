import React from 'react';
import {
	BaseControls,
	BoxShadowControl,
	ContainerContents,
	ContainerControl,
} from '@mindspun/mrblx';
import { Attributes } from '../types';

const TextAreaControls = (props: {
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
}) => {
	return (
		<>
			<ContainerControl title={'Style'}>
				<ContainerContents>
					<BaseControls
						attributes={props.attributes.textAreaStyle}
						setAttributes={(style) => {
							const textAreaStyle = {
								...props.attributes.textAreaStyle,
								...style,
							};
							props.setAttributes({ textAreaStyle });
						}}
						options={{
							color: { responsive: true },
							backgroundColor: { responsive: true },
							margin: { responsive: true },
							padding: { responsive: true },
							border: { responsive: true },
						}}
					/>
					<BoxShadowControl
						attributes={props.attributes.textAreaStyle}
						setAttributes={(textAreaStyle) => {
							props.setAttributes({
								textAreaStyle: {
									...props.attributes.textAreaStyle,
									...textAreaStyle,
								},
							});
						}}
						isResponsive={true}
					/>
				</ContainerContents>
			</ContainerControl>
			<ContainerControl title={'Error State'}>
				<ContainerContents>
					<BaseControls
						attributes={props.attributes.textAreaStyleError}
						setAttributes={(style) => {
							const textAreaStyleError = {
								...props.attributes.textAreaStyleError,
								...style,
							};
							props.setAttributes({ textAreaStyleError });
						}}
						options={{
							color: { responsive: true },
							backgroundColor: { responsive: true },
							border: { responsive: true },
						}}
					/>
					<BoxShadowControl
						attributes={props.attributes.textAreaStyleError}
						setAttributes={(textAreaStyleError) => {
							props.setAttributes({
								textAreaStyleError: {
									...props.attributes.textAreaStyleError,
									...textAreaStyleError,
								},
							});
						}}
						isResponsive={true}
					/>
				</ContainerContents>
			</ContainerControl>
			<ContainerControl title={'Focus'}>
				<ContainerContents>
					<BaseControls
						attributes={props.attributes.textAreaStyleFocus}
						setAttributes={(style) => {
							const textAreaStyleFocus = {
								...props.attributes.textAreaStyleFocus,
								...style,
							};
							props.setAttributes({ textAreaStyleFocus });
						}}
						options={{
							color: { responsive: true },
							backgroundColor: { responsive: true },
							border: { responsive: true },
						}}
					/>
					<BoxShadowControl
						attributes={props.attributes.textAreaStyleFocus}
						setAttributes={(textAreaStyleFocus) => {
							props.setAttributes({
								textAreaStyleFocus: {
									...props.attributes.textAreaStyleFocus,
									...textAreaStyleFocus,
								},
							});
						}}
						isResponsive={true}
					/>
				</ContainerContents>
			</ContainerControl>
		</>
	);
};

export default TextAreaControls;
