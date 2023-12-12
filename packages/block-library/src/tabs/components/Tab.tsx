import classNames from 'classnames';
import {CSSProperties} from 'react';

type Props = {
    label: string;
    blockId: string;
    isActive?: boolean;
    onClick?: () => void;
}
const Tab = (props: Props) => {

    const className = classNames({
        'wpx--tab': true,
        'wpx--tab--active': props.isActive
    });

    return (
        <li
            className={ className }
            onClick={ props.onClick }
            data-block-id={props.blockId}
            role="presentation"
        >
            <button role="tab">{props.label}</button>
        </li>);
};

export default Tab;