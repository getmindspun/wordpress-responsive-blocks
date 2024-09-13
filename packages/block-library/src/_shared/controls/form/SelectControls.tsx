import type { BlockCSSProperties } from '@mindspun/mrblx';
import {
	BaseControls,
	BoxShadowControl,
	ContainerContents,
	ContainerControl,
} from '@mindspun/mrblx';

type Attributes = {
	selectStyle: BlockCSSProperties;
	selectStyleError: BlockCSSProperties;
	selectStyleFocus: BlockCSSProperties;
};

const SelectControls = (props: {
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
}) => {
	return (
		<>
			<ContainerControl title={'Style'}>
				<ContainerContents>
					<BaseControls
						attributes={props.attributes.selectStyle}
						setAttributes={(style) => {
							const selectStyle = {
								...props.attributes.selectStyle,
								...style,
							};
							props.setAttributes({ selectStyle });
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
						attributes={props.attributes.selectStyle}
						setAttributes={(selectStyle) => {
							props.setAttributes({
								selectStyle: {
									...props.attributes.selectStyle,
									...selectStyle,
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
						attributes={props.attributes.selectStyleError}
						setAttributes={(style) => {
							const selectStyleError = {
								...props.attributes.selectStyleError,
								...style,
							};
							props.setAttributes({ selectStyleError });
						}}
						options={{
							color: { responsive: true },
							backgroundColor: { responsive: true },
							border: { responsive: true },
						}}
					/>
					<BoxShadowControl
						attributes={props.attributes.selectStyleError}
						setAttributes={(selectStyleError) => {
							props.setAttributes({
								selectStyleError: {
									...props.attributes.selectStyleError,
									...selectStyleError,
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
						attributes={props.attributes.selectStyleFocus}
						setAttributes={(style) => {
							const selectStyleFocus = {
								...props.attributes.selectStyleFocus,
								...style,
							};
							props.setAttributes({ selectStyleFocus });
						}}
						options={{
							color: { responsive: true },
							backgroundColor: { responsive: true },
							border: { responsive: true },
						}}
					/>
					<BoxShadowControl
						attributes={props.attributes.selectStyleFocus}
						setAttributes={(selectStyleFocus) => {
							props.setAttributes({
								selectStyleFocus: {
									...props.attributes.selectStyleFocus,
									...selectStyleFocus,
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

export default SelectControls;
