import {CSSProperties} from 'react';

import {__experimentalBorderBoxControl as BorderBoxControl} from '@wordpress/components';
import {AnyBorder, Borders} from '@wordpress/components/build-types/border-box-control/types';

import './BorderControl.scss';
import {Border} from '@wordpress/components/build-types/border-control/types';
import {fromBorderShorthand, toBorderShorthand} from './utils';

type BorderBaseControlProps = {
    title?: string;
    attributes: Pick<CSSProperties, 'borderTop' | 'borderRight' | 'borderBottom' | 'borderLeft' | 'borderTopRightRadius' | 'borderBottomRightRadius' | 'borderTopLeftRadius' | 'borderBottomLeftRadius'>;
    setAttributes: (attributes: BorderBaseControlProps['attributes']) => void;
}

const BorderBaseControl = (props: BorderBaseControlProps) => {
    const value = {
        top: fromBorderShorthand(props.attributes.borderTop),
        right: fromBorderShorthand(props.attributes.borderRight),
        bottom: fromBorderShorthand(props.attributes.borderBottom),
        left: fromBorderShorthand(props.attributes.borderLeft)
    }

    const onChange = (newBorders: AnyBorder) => {
        if (!newBorders) {
            props.setAttributes({
                borderTop: undefined,
                borderRight: undefined,
                borderBottom: undefined,
                borderLeft: undefined
            });
        } else if ((newBorders as Borders).top || (newBorders as Borders).right || (newBorders as Borders).bottom || (newBorders as Borders).left) {
            const borders = newBorders as Borders;
            props.setAttributes({
                borderTop: toBorderShorthand(borders.top),
                borderRight: toBorderShorthand(borders.right),
                borderBottom: toBorderShorthand(borders.bottom),
                borderLeft: toBorderShorthand(borders.left),
            });
        } else {
            const border = toBorderShorthand(newBorders as Border);
            props.setAttributes({
                borderTop: border,
                borderRight: border,
                borderBottom: border,
                borderLeft: border,
            });
        }
    };


    return (
        <BorderBoxControl
            onChange={onChange}
            value={value}
        />
    );
};

export default BorderBaseControl;
