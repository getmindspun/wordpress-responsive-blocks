import {Props} from '../types';
import {
    BackgroundImageControl,
    BaseControls, BorderControl, BoxShadowControl,
    ContainerContents,
    ContainerControl,
    WidthHeightControl
} from '@mindspun/wpx';

const StyleControls = (props: Props) => {
    return (
        <>
            <ContainerContents>
                <BaseControls
                    attributes={props.attributes.style}
                    setAttributes={style => {
                        props.setAttributes({style: {...props.attributes.style, ...style}});
                    }}
                    options={{
                        color: {responsive: true},
                        backgroundColor: {responsive: true},
                        margin: {responsive: true},
                        padding: {responsive: true}
                    }}
                />
                <hr />
                <BackgroundImageControl
                    attributes={props.attributes.style}
                    setAttributes={style => {
                        props.setAttributes({style: {...props.attributes.style, ...style}});
                    }}
                />
                <hr />
                <BorderControl
                    attributes={props.attributes.style}
                    setAttributes={style => {
                        props.setAttributes({style: {...props.attributes.style, ...style}});
                    }}
                />
            </ContainerContents>
            <ContainerControl title={'Width'}>
                <ContainerContents>
                    <WidthHeightControl
                        label={'Width'}
                        propertyName={'width'}
                        attributes={props.attributes.style}
                        setAttributes={style => {
                            props.setAttributes({style: {...props.attributes.style, ...style}});
                        }}
                        isResponsive={true}
                    />
                    <WidthHeightControl
                        label={'Min Width'}
                        propertyName={'minWidth'}
                        attributes={props.attributes.style}
                        setAttributes={style => {
                            props.setAttributes({style: {...props.attributes.style, ...style}});
                        }}
                        isResponsive={true}
                    />
                    <WidthHeightControl
                        label={'Max Width'}
                        propertyName={'maxWidth'}
                        attributes={props.attributes.style}
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
                        attributes={props.attributes.style}
                        setAttributes={style => {
                            props.setAttributes({style: {...props.attributes.style, ...style}});
                        }}
                        isResponsive={true}
                    />
                    <WidthHeightControl
                        label={'Min Height'}
                        propertyName={'minHeight'}
                        attributes={props.attributes.style}
                        setAttributes={style => {
                            props.setAttributes({style: {...props.attributes.style, ...style}});
                        }}
                        isResponsive={true}
                    />
                    <WidthHeightControl
                        label={'Max Height'}
                        propertyName={'maxHeight'}
                        attributes={props.attributes.style}
                        setAttributes={style => {
                            props.setAttributes({style: {...props.attributes.style, ...style}});
                        }}
                        isResponsive={true}
                    />
                </ContainerContents>
            </ContainerControl>
            <ContainerControl title={'Box Shadow'}>
                <ContainerContents>
                    <BoxShadowControl
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

export default StyleControls;
