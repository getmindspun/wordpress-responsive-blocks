import {buildCSS} from '../functions';
import {BlockCSSProperties} from '../types';

const StyleDisplay = (props: {attributes: BlockCSSProperties}) => {
    return (
        <div style={{marginTop: '2em'}}>
            &lt;style&gt;
            <pre>
                {buildCSS('123', props.attributes)}
            </pre>
            &lt;/style&gt;
        </div>
    );
}

export default StyleDisplay;
