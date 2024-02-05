import {
	BaseControls,
	ContainerContents,
	ContainerControl,
	TabbedContainer,
	TabbedControl,
} from '@mindspun/wpx';

import { Props } from '../types';

const TabControls = (props: {
	attributes: Props['attributes'];
	setAttributes: (attributes: Partial<Props['attributes']>) => void;
}) => {
	return (
		<ContainerControl title={'Tabs'}>
			<TabbedControl>
				<TabbedContainer key={'Default'}>
					<ContainerContents>
						<BaseControls
							attributes={props.attributes.tab}
							setAttributes={(newTab) => {
								props.setAttributes({
									tab: { ...props.attributes.tab, ...newTab },
								});
							}}
							options={{
								color: { responsive: true },
								backgroundColor: { responsive: true },
								margin: { responsive: true },
								padding: { responsive: true },
								border: { responsive: true },
								fontSize: { responsive: true },
							}}
						/>
					</ContainerContents>
				</TabbedContainer>
				<TabbedContainer key={'Active'}>
					<ContainerContents>
						<BaseControls
							attributes={props.attributes.activeTab}
							setAttributes={(newTab) => {
								props.setAttributes({
									activeTab: {
										...props.attributes.activeTab,
										...newTab,
									},
								});
							}}
							options={{
								color: { responsive: true },
								backgroundColor: { responsive: true },
								margin: { responsive: true },
								padding: { responsive: true },
								border: { responsive: true },
								fontSize: { responsive: true },
							}}
						/>
					</ContainerContents>
				</TabbedContainer>
				<TabbedContainer key={'Hover'}>
					<ContainerContents>
						<BaseControls
							attributes={{
								color: props.attributes.tab.colorHover,
								tabletColor: props.attributes.tab.tabletColorHover,
								mobileColor: props.attributes.tab.mobileColorHover,
								backgroundColor: props.attributes.tab.backgroundColorHover,
								tabletBackgroundColor: props.attributes.tab.tabletBackgroundColorHover,
								mobileBackgroundColor: props.attributes.tab.mobileBackgroundColorHover
							}}
							setAttributes={(tab) => {
								props.setAttributes({
									tab: {
										...props.attributes.tab,
										colorHover: tab.color,
										tabletColorHover: tab.tabletColor,
										mobileColorHover: tab.mobileColor,
										backgroundColorHover: tab.backgroundColor,
										tabletBackgroundColorHover: tab.tabletBackgroundColor,
										mobileBackgroundColorHover: tab.mobileBackgroundColor,
									},
								});
							}}
							options={{
								color: { responsive: true },
								backgroundColor: { responsive: true }
							}}
						/>
					</ContainerContents>
				</TabbedContainer>
			</TabbedControl>
		</ContainerControl>
	);
};

export default TabControls;
