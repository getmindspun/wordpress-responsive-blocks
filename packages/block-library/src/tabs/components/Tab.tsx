import classNames from 'classnames';
import {CSSProperties} from 'react';

type Props = {
    label: string;
    isActive?: boolean;
    style?: CSSProperties;
    onClick?: () => void;
}
const Tab = (props: Props) => {

    const className = classNames({
        'wpx--tab': true,
        'wpx--tab--active': props.isActive
    });

    return (<li className={ className } onClick={ props.onClick } style={ props.style }>{ props.label }</li>);
};

export default Tab;