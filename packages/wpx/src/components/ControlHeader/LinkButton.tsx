import {Button} from '@wordpress/components';

import {ReactComponent as LinkedIcon} from '../../icons/Linked.svg';
import {ReactComponent as UnlinkedIcon} from '../../icons/Unlinked.svg';

const LinkButton = (props: { isLinked: boolean, onLinkedChange: (isLinked: boolean) => void }) => {
    return (
        <Button
            isSmall={ true }
            icon={ props.isLinked ? LinkedIcon : UnlinkedIcon }
            onClick={ () => props.onLinkedChange(!props.isLinked) }
            variant={ 'tertiary' }
            label={ props.isLinked ? 'Unlinked' : 'Linked' }
            showTooltip={true}
        />
    );
};

export default LinkButton;
