import React from 'react';

import {Button} from '@wordpress/components';
import {useState} from '@wordpress/element';

import './ContainerControl.scss';
import {ReactComponent as UpIcon} from '../../icons/Up.svg';
import {ReactComponent as DownIcon} from '../../icons/Down.svg';

export interface ContainerControlProps {
    title: string;
    children: React.ReactNode;
    initialOpen?: boolean;
    headingTag?: 'h2' | 'h3';
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const ContainerControl = (props: ContainerControlProps) => {
    const [isOpen, setIsOpen] = useState(props.initialOpen ? props.initialOpen : false);
    const HeadingTag = props.headingTag ? props.headingTag as keyof React.JSX.IntrinsicElements : 'h2';

    return (
        <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <div className="wpx--container-control" onClick={ () => setIsOpen(!isOpen) }>
                <HeadingTag>
                    <Button icon={ isOpen ? (<UpIcon />) : <DownIcon /> }>{ props.title }</Button>
                </HeadingTag>
            </div>
            { isOpen && props.children }
        </div>
    );
};

export default ContainerControl;