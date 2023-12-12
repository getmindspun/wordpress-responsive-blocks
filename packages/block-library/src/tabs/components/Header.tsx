import React from 'react';
import {ComponentProps} from '../types';
import {StylePortal} from '@mindspun/wpx';
import classNames from 'classnames';


const Header = (props: ComponentProps) => {

    const className = classNames('wpx--tabs', {
        [`wpx--block-align-${props.attributes.header.blockAlign}`]: props.attributes.header.blockAlign !== undefined,
        [`wpx--tablet-block-align-${props.attributes.header.tabletBlockAlign}`]: props.attributes.header.tabletBlockAlign !== undefined,
        [`wpx--block-align-${props.attributes.header.mobileBlockAlign}`]: props.attributes.header.mobileBlockAlign !== undefined,
        'stack-on-mobile': props.attributes.stackOnMobile
    });

    return (
        <>
            {props.setAttributes &&
                <StylePortal
                    blockId={props.attributes.blockId}
                    attributes={props.attributes.header}
                    selector={'.wpx--tabs'}
                />
            }
            <ul className={className}>
                {props.children}
            </ul>
        </>
    );
};

export default Header;
