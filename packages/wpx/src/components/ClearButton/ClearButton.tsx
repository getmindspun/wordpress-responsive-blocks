import {Button} from '@wordpress/components';

import './ClearButton.scss';

const ClearButton = (props: { onClick: () => void }) => {
    return (
        <div className="wpx--clear-button">
            <Button variant="tertiary" onClick={ props.onClick }>Clear</Button>
        </div>
    );
};

export default ClearButton;
