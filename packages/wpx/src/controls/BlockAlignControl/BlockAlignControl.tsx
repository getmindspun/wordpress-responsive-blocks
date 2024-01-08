import {__} from '@wordpress/i18n';

import './BlockAlignControl.scss';
import {ControlHeader} from '../../components';
import {BlockAlign, BlockCSSProperties} from '../../types';
import BlockAlignResponsiveControl from './BlockAlignResponsiveControl';
import BlockAlignBaseControl from './BlockAlignBaseControl';

export type BlockAlignControlProps = {
    label?: string;
    options?: BlockAlign[];
    attributes: BlockCSSProperties,
    setAttributes: (attributes: Partial<BlockAlignControlProps['attributes']>) => void
    isResponsive?: boolean;
}

const BlockAlignControl = (props: BlockAlignControlProps) => {
    return (
        <div className="wpx--block-align-control">
            <ControlHeader
                title={props.label}
                isResponsive={props.isResponsive}
            />
            {props.isResponsive ?
                <BlockAlignResponsiveControl {...props}/> :
                <BlockAlignBaseControl
                    label={props.label}
                    options={props.options!}
                    blockAlign={props.attributes.blockAlign}
                    onChange={blockAlign => {
                        props.setAttributes({...props.attributes, blockAlign});
                    }}
                />
            }
        </div>
    );
};

BlockAlignControl.defaultProps = {
    label: __('Block Align'),
    options: ['left', 'center', 'right', 'wide', 'full'] as BlockAlign[],
}

export default BlockAlignControl;
