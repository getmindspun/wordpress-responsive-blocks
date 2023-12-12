import {
    BaseControls,
    ContainerContents,
    ContainerControl, TabbedContainer, TabbedControl,
} from '@mindspun/wpx';

import {Props} from '../../types';

const TabControls = (props: {
    attributes: Props['attributes'],
    setAttributes: (attributes: Partial<Props['attributes']>) => void,
}) => {
    return (
        <ContainerControl title={'Tabs'}>
            <TabbedControl>
                <TabbedContainer key={'Default'}>
                    <ContainerContents>
                        <BaseControls
                            attributes={props.attributes.tab}
                            setAttributes={newTab => {
                                props.setAttributes({tab: {...props.attributes.tab, ...newTab}})
                            }}
                            options={{
                                color: {responsive: true},
                                backgroundColor: {responsive: true},
                                margin: {responsive: true},
                                padding: {responsive: true},
                                border: {responsive: true}
                            }}
                        />
                    </ContainerContents>
                </TabbedContainer>
                <TabbedContainer key={'Active'}>
                    <ContainerContents>
                        <BaseControls
                            attributes={props.attributes.activeTab}
                            setAttributes={newTab => {
                                props.setAttributes({activeTab: {...props.attributes.activeTab, ...newTab}})
                            }}
                            options={{
                                color: {responsive: true},
                                backgroundColor: {responsive: true},
                                margin: {responsive: true},
                                padding: {responsive: true},
                                border: {responsive: true}
                            }}
                        />
                    </ContainerContents>
                </TabbedContainer>
            </TabbedControl>
        </ContainerControl>
    );
};

export default TabControls;
