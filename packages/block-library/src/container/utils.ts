import classNames from 'classnames';

import {DisplayControlAttributes, Props} from './types';

export function getClassName(attributes: Props['attributes']) {
    return classNames({
        [`wpx-d-${attributes.style.display}`]: attributes.style.display,
        [`wpx-d-tablet-${attributes.style.tabletDisplay}`]: attributes.style.tabletDisplay,
        [`wpx-d-mobile-${attributes.style.mobileDisplay}`]: attributes.style.mobileDisplay,
    });
}
