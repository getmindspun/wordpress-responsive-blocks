import { __ } from '@wordpress/i18n';
import { Props } from '../types';

import {
	BaseControls,
	BlockCSSProperties,
	BorderControl,
	ColorControl,
	ColorsGroup,
	ContainerContents,
	ContainerControl,
	CustomCSSControl,
} from '@mindspun/wpx';
import BorderHoverControl from './BorderHoverControl';

const Controls = (props: Props) => {
	return (
		<>
			<ContainerContents>
				<BaseControls
					attributes={
						props.attributes.style
							? props.attributes.style
							: ({} as BlockCSSProperties)
					}
					setAttributes={(style) => {
						props.setAttributes({
							style: { ...props.attributes.style, ...style },
						});
					}}
					options={{
						color: { responsive: true },
						backgroundColor: { responsive: true },
						fontSize: { responsive: true },
						fontAppearance: true,
						letterCase: true,
						margin: { responsive: true },
						padding: { responsive: true },
						border: { responsive: true },
					}}
				/>
			</ContainerContents>
			<ContainerControl title={__('Hover')}>
				<ContainerContents>
					<ColorsGroup isResponsive={true}>
						<ColorControl
							label={'Color'}
							attributes={{
								color: props.attributes.style.colorHover,
								tabletColor:
									props.attributes.style.tabletColorHover,
								mobileColor:
									props.attributes.style.mobileColorHover,
							}}
							setAttributes={(newAttributes) => {
								const style = {
									...props.attributes.style,
									...{
										colorHover: newAttributes.color,
										tabletColorHover:
											newAttributes.tabletColor,
										mobileColorHover:
											newAttributes.mobileColor,
									},
								};
								props.setAttributes({ style });
							}}
							isResponsive={true}
							hideHeader={true}
						/>
						<ColorControl
							label={'Background'}
							attributes={{
								color: props.attributes.style
									.backgroundColorHover,
								tabletColor:
									props.attributes.style
										.tabletBackgroundColorHover,
								mobileColor:
									props.attributes.style
										.mobileBackgroundColorHover,
							}}
							setAttributes={(newAttributes) => {
								const style = {
									...props.attributes.style,
									...{
										backgroundColorHover:
											newAttributes.color,
										tabletBackgroundColorHover:
											newAttributes.tabletColor,
										mobileBackgroundColor:
											newAttributes.mobileColor,
									},
								};
								props.setAttributes({ style });
							}}
							isResponsive={true}
							hideHeader={true}
						/>
					</ColorsGroup>
					<BorderHoverControl
						attributes={props.attributes.style}
						setAttributes={(style) => {
							props.setAttributes({
								style: { ...props.attributes.style, ...style },
							});
						}}
					/>
				</ContainerContents>
			</ContainerControl>
			<ContainerControl title={__('Custom CSS')}>
				<ContainerContents>
					<CustomCSSControl
						blockId={props.attributes.blockId}
						attributes={props.attributes.style}
						setAttributes={(style) => {
							props.setAttributes({
								style: { ...props.attributes.style, ...style },
							});
						}}
						isResponsive={true}
					/>
				</ContainerContents>
			</ContainerControl>
		</>
	);
};

export default Controls;
