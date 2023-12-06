import {
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import './HeadingTagControl.scss';

export type HeadingTag = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingTagControlProps = {
    tag: HeadingTag,
    onChange: (tag: HeadingTag) => void;
}

const HeadingTagControl = (props: HeadingTagControlProps) => {
    return (
        <div className="wpx--heading-tag-control">
            <ToggleGroupControl label="Tag" value={ props.tag || 'h2' } isBlock
                                onChange={ value => props.onChange(value as HeadingTag) }>
                <ToggleGroupControlOption value="h2" label="H2"/>
                <ToggleGroupControlOption value="h3" label="H3"/>
                <ToggleGroupControlOption value="h4" label="H4"/>
                <ToggleGroupControlOption value="h5" label="H5"/>
                <ToggleGroupControlOption value="h6" label="H6"/>
            </ToggleGroupControl>
        </div>
    );
};

export default HeadingTagControl;
