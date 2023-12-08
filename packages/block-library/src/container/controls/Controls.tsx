import {Props} from '../types';
import {InspectorControls} from '@wordpress/block-editor';
import {styles, layout} from '@wordpress/icons';

import {
    BaseControls,
    BlockCSSProperties,
    ContainerContents, ContainerControl,
    TabbedContainer,
    TabbedControl,
    WidthHeightControl
} from '@mindspun/wpx';
import DisplayControl from './DisplayControl';
import FlexDirectionControl from './FlexDirectionControl';
import JustifyContentControl from './JustifyContentControl';
import AlignItemsControl from './AlignItemsControl';
import SizingControl from './sizing/SizingControl';

const Controls = (props: Props & {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}) => {
    return (
        <InspectorControls>
            <div
                className={'wp-block-mindspun-container--controls'}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
            >
                <TabbedControl>
                    <TabbedContainer key={'Layout'} icon={layout}>
                        <ContainerContents>
                            <DisplayControl
                                attributes={props.attributes.style}
                                setAttributes={newStyle => {
                                    const style = {...props.attributes.style, ...newStyle};
                                    props.setAttributes({style});
                                }}/>
                            <FlexDirectionControl
                                attributes={props.attributes.style}
                                setAttributes={newStyle => {
                                    const style = {...props.attributes.style, ...newStyle};
                                    props.setAttributes({style});
                                }}/>
                            <JustifyContentControl
                                attributes={props.attributes.style}
                                setAttributes={newStyle => {
                                    const style = {...props.attributes.style, ...newStyle};
                                    props.setAttributes({style});
                                }}/>
                            <AlignItemsControl
                                attributes={props.attributes.style}
                                setAttributes={newStyle => {
                                    const style = {...props.attributes.style, ...newStyle};
                                    props.setAttributes({style});
                                }}/>
                            <SizingControl
                                attributes={props.attributes.style}
                                setAttributes={newStyle => {
                                    const style = {...props.attributes.style, ...newStyle};
                                    props.setAttributes({style});
                                }}/>
                        </ContainerContents>
                    </TabbedContainer>
                    <TabbedContainer key={'Style'} icon={styles}>
                        <ContainerContents>
                            <BaseControls
                                attributes={props.attributes.style ? props.attributes.style : {} as BlockCSSProperties}
                                setAttributes={style => {
                                    props.setAttributes({style: {...props.attributes.style, ...style}});
                                }}
                                options={{
                                    margin: {responsive: true},
                                    padding: {responsive: true}
                                }}
                            />
                        </ContainerContents>
                        <ContainerControl title={'Width'}>
                            <ContainerContents>
                                <WidthHeightControl
                                    label={'Width'}
                                    propertyName={'width'}
                                    attributes={props.attributes.style ? props.attributes.style : {} as BlockCSSProperties}
                                    setAttributes={style => {
                                        props.setAttributes({style: {...props.attributes.style, ...style}});
                                    }}
                                    isResponsive={true}
                                />
                                <WidthHeightControl
                                    label={'Min Width'}
                                    propertyName={'minWidth'}
                                    attributes={props.attributes.style ? props.attributes.style : {} as BlockCSSProperties}
                                    setAttributes={style => {
                                        props.setAttributes({style: {...props.attributes.style, ...style}});
                                    }}
                                    isResponsive={true}
                                />
                                <WidthHeightControl
                                    label={'Max Width'}
                                    propertyName={'maxWidth'}
                                    attributes={props.attributes.style ? props.attributes.style : {} as BlockCSSProperties}
                                    setAttributes={style => {
                                        props.setAttributes({style: {...props.attributes.style, ...style}});
                                    }}
                                    isResponsive={true}
                                />
                            </ContainerContents>
                        </ContainerControl>
                        <ContainerControl title={'Height'}>
                            <ContainerContents>
                                <WidthHeightControl
                                    label={'Height'}
                                    propertyName={'height'}
                                    attributes={props.attributes.style ? props.attributes.style : {} as BlockCSSProperties}
                                    setAttributes={style => {
                                        props.setAttributes({style: {...props.attributes.style, ...style}});
                                    }}
                                    isResponsive={true}
                                />
                                <WidthHeightControl
                                    label={'Min Height'}
                                    propertyName={'minHeight'}
                                    attributes={props.attributes.style ? props.attributes.style : {} as BlockCSSProperties}
                                    setAttributes={style => {
                                        props.setAttributes({style: {...props.attributes.style, ...style}});
                                    }}
                                    isResponsive={true}
                                />
                                <WidthHeightControl
                                    label={'Max Height'}
                                    propertyName={'maxHeight'}
                                    attributes={props.attributes.style ? props.attributes.style : {} as BlockCSSProperties}
                                    setAttributes={style => {
                                        props.setAttributes({style: {...props.attributes.style, ...style}});
                                    }}
                                    isResponsive={true}
                                />
                            </ContainerContents>
                        </ContainerControl>
                    </TabbedContainer>
                </TabbedControl>
            </div>
        </InspectorControls>
    );
}

export default Controls;
