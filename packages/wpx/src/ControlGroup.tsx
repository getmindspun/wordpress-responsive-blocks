import {
    ContainerControl,
} from './controls';

import BaseControls, {BaseControlsProps} from './BaseControls';
import {ContainerContents} from './components';

type ControlGroupProps = BaseControlsProps & {
    title: string,
    initialOpen?: boolean;
}

const ControlGroup = (props: ControlGroupProps) => {
    return (
        <ContainerControl
            title={props.title}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            initialOpen={props.initialOpen}
        >
            <ContainerContents>
            <BaseControls
                attributes={props.attributes}
                setAttributes={props.setAttributes}
                options={props.options}
            >
                {props.children}
            </BaseControls>
            </ContainerContents>
        </ContainerControl>
    );
};

export default ControlGroup;
