import React from 'react';

import './ContainerContents.scss';

export interface ContainerContentsProps {
    children: React.ReactNode;
}

const ContainerContents = (props: ContainerContentsProps) => {
    return (
        <>
            <div className="wpx--container-contents">
                {props.children}
            </div>
            <div className={"wpx--divider"} />
        </>
    );
};

export default ContainerContents;