import {
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import './HeadingTagControl.scss';
import {__} from '@wordpress/i18n';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingTagControlProps = {
    label?: string,
    tagName?: HeadingTag,
    onChange: (tag: HeadingTag) => void;
}

const HeadingTagControl = (props: HeadingTagControlProps) => {
    return (
        <div className="wpx--heading-tag-control">
            <ToggleGroupControl
                label={props.label!}
                value={ props.tagName || 'h2' } isBlock
                onChange={ value => props.onChange(value as HeadingTag) }
            >
                <ToggleGroupControlOption value="h1" label="H1"/>
                <ToggleGroupControlOption value="h2" label="H2"/>
                <ToggleGroupControlOption value="h3" label="H3"/>
                <ToggleGroupControlOption value="h4" label="H4"/>
                <ToggleGroupControlOption value="h5" label="H5"/>
                <ToggleGroupControlOption value="h6" label="H6"/>
            </ToggleGroupControl>
        </div>
    );
};

HeadingTagControl.defaultProps = {
    label: __('Tag'),
    tagName: 'h2' as HeadingTag
};

export default HeadingTagControl;
