import classNames from 'classnames';
import {Props} from './types';
import {showOnValue} from '../image/utils';

export function getClassName(attributes: Props['attributes']) {
    return classNames(`variant-${attributes.variant}`, {
        [`wpx--block-align-${attributes.style.blockAlign}`]: attributes.style.blockAlign !== undefined,
        [`wpx--tablet-block-align-${attributes.style.tabletBlockAlign}`]: attributes.style.tabletBlockAlign !== undefined,
        [`wpx--mobile-block-align-${attributes.style.mobileBlockAlign}`]: attributes.style.mobileBlockAlign !== undefined,
    });
}