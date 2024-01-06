import classNames from 'classnames';

import {Props} from './types';

export function getClassName(attributes: Props['attributes'], focused: boolean = false) {
    return classNames({
        'wpx--focused': focused
    });
}
