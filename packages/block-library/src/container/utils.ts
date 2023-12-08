import classNames from 'classnames';

import {DisplayProperties, Props} from './types';

export function getClassName(attributes: Props['attributes'], focused: boolean = false) {
    return classNames({
        'wpx--focused': focused,
        [`wpx-d-${attributes.style.display}`]: attributes.style.display,
        [`wpx-d-tablet-${attributes.style.tabletDisplay}`]: attributes.style.tabletDisplay,
        [`wpx-d-mobile-${attributes.style.mobileDisplay}`]: attributes.style.mobileDisplay,

        [`wpx-flex-${attributes.style.flexDirection}`]: attributes.style.flexDirection,
        [`wpx-flex-tablet-${attributes.style.tabletFlexDirection}`]: attributes.style.tabletFlexDirection,
        [`wpx-flex-mobile-${attributes.style.mobileFlexDirection}`]: attributes.style.mobileFlexDirection,
    });
}
