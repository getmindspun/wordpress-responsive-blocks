import {Props} from '../types';

import {
    BaseControls, BlockAlignControl,
    BlockCSSProperties,
    ColorControl, ColorsGroup,
    ContainerContents, ContainerControl, CustomCSSControl,
    TabbedContainer,
    TabbedControl
} from '@mindspun/wpx';
import {layout, styles} from '@wordpress/icons';
import ButtonVariantControl from './ButtonVariantControl';

const Controls = (props: Props) => {
    return (
        <>
            <TabbedControl name={'button'}>
                <TabbedContainer key={'Normal'}>
                    <ContainerContents>
                        <BlockAlignControl
                            attributes={props.attributes.style}
                            setAttributes={newStyle => {
                                const style = {...props.attributes.style, ...newStyle};
                                props.setAttributes({style});
                            }}
                            options={['left', 'center', 'right', 'wide']}
                            isResponsive={true}
                        />
                        <BaseControls
                            attributes={props.attributes.style ? props.attributes.style : {} as BlockCSSProperties}
                            setAttributes={style => {
                                props.setAttributes({style: {...props.attributes.style, ...style}});
                            }}
                            options={{
                                color: {responsive: true},
                                backgroundColor: {responsive: true},
                                fontSize: {responsive: true},
                                fontAppearance: true,
                                margin: {responsive: true},
                                padding: {responsive: true}
                            }}
                        />
                    </ContainerContents>
                </TabbedContainer>
                <TabbedContainer key={'Hover'}>
                    <ContainerContents>
                        <ColorsGroup isResponsive={true}>
                            <ColorControl
                                label={'Color'}
                                attributes={{
                                    color: props.attributes.style.colorHover,
                                    tabletColor: props.attributes.style.tabletColorHover,
                                    mobileColor: props.attributes.style.mobileColorHover,
                                }}
                                setAttributes={newAttributes => {
                                    const style = {
                                        ...props.attributes.style, ...{
                                            colorHover: newAttributes.color,
                                            tabletColorHover: newAttributes.tabletColor,
                                            mobileColorHover: newAttributes.mobileColor,
                                        }
                                    }
                                    props.setAttributes({style});
                                }}
                                isResponsive={true}
                                hideHeader={true}
                            />
                            <ColorControl
                                label={'Background'}
                                attributes={{
                                    color: props.attributes.style.backgroundColorHover,
                                    tabletColor: props.attributes.style.tabletBackgroundColorHover,
                                    mobileColor: props.attributes.style.mobileBackgroundColorHover,
                                }}
                                setAttributes={newAttributes => {
                                    const style = {
                                        ...props.attributes.style, ...{
                                            backgroundColorHover: newAttributes.color,
                                            tabletBackgroundColorHover: newAttributes.tabletColor,
                                            mobileBackgroundColor: newAttributes.mobileColor,
                                        }
                                    };
                                    props.setAttributes({style});
                                }}
                                isResponsive={true}
                                hideHeader={true}
                            />
                        </ColorsGroup>
                    </ContainerContents>
                </TabbedContainer>
            </TabbedControl>
            <ContainerControl title={'Custom CSS'}>
                <ContainerContents>
                    <CustomCSSControl
                        blockId={props.attributes.blockId}
                        attributes={props.attributes.style}
                        setAttributes={style => {
                            props.setAttributes({style: {...props.attributes.style, ...style}});
                        }}
                        isResponsive={true}
                    />
                </ContainerContents>
            </ContainerControl>
        </>
    );
}

export default Controls;
