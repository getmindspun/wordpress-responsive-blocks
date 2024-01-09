import {__} from '@wordpress/i18n';

import {SelectControl} from '@wordpress/components';

import {ControlHeader} from '@mindspun/wpx';

const OPTIONS = [
    {label: 'No Opener', value: 'noopener'},
    {label: 'No Follow', value: 'nofollow'},
    {label: 'Sponsored', value: 'sponsored'},
    {label: 'User Generated Content', value: 'ugc'}
];

const RelControl = (props: {
    value: string[];
    onChange: (value: string[]) => void;
}) => {

    return (
        <div className={'wpx--rel-control'}>
            <ControlHeader
                title={__('rel Tag')}
            />
            <SelectControl
                multiple
                value={props.value}
                options={OPTIONS}
                onChange={props.onChange}
                __nextHasNoMarginBottom
            />
        </div>
    );
}

export default RelControl;
