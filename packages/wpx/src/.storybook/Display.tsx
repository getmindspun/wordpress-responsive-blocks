import React from 'react';

import {BlockCSSProperties} from '../types';
import {buildCSS} from '../functions';

const Display = (props: { attributes: BlockCSSProperties, children: React.ReactNode }) => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <div style={{flexGrow: 1, flexBasis: 0}}>
                    <div style={{width: 280, marginLeft: 'auto', marginRight: 'auto'}}>
                        {props.children}
                    </div>
                </div>
                <div style={{flexGrow: 1, flexBasis: 0, marginTop: '2em'}}>
                        <pre
                            style={{
                                width: 'fit-content',
                                margin: '0 auto'
                            }}>{JSON.stringify(props.attributes, null, 4)}</pre>
                </div>
            </div>
            <div style={{marginTop: '2em'}}>
                &lt;style&gt;
                <pre>
                        {buildCSS('123', props.attributes)}
                    </pre>
                &lt;/style&gt;
            </div>
        </>
    )
}

export default Display;
