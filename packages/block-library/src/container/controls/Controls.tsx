import {Props} from '../types';
import {InspectorControls} from '@wordpress/block-editor';
import {styles, layout} from '@wordpress/icons';

import {BaseControls, ContainerContents, TabbedContainer, TabbedControl} from '@mindspun/wpx';
import DisplayControl from './DisplayControl';

const Controls = (props: Props) => {
    return (
        <InspectorControls>
            <div className={'wp-block-mindspun-container--controls'}>
                <TabbedControl>
                    <TabbedContainer key={'Layout'} icon={layout}>
                        <ContainerContents>
                            <DisplayControl
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
                                attributes={props.attributes.style ? props.attributes.style : {}}
                                setAttributes={style => {
                                    props.setAttributes({style: {...props.attributes.style, ...style}});
                                }}
                                options={{
                                    margin: {responsive: true},
                                    padding: {responsive: true}
                                }}
                            />
                        </ContainerContents>
                    </TabbedContainer>
                </TabbedControl>
            </div>
        </InspectorControls>
    );
}

export default Controls;
