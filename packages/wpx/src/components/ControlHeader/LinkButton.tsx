import {Button} from '@wordpress/components';
import {link, linkOff} from '@wordpress/icons';

const LinkButton = (props: { isLinked: boolean, onLinkedChange: (isLinked: boolean) => void }) => {
    return (
        <Button
            isSmall={ true }
            icon={ props.isLinked ? link : linkOff }
            onClick={ () => props.onLinkedChange(!props.isLinked) }
            variant={ 'tertiary' }
            label={ props.isLinked ? 'Unlinked' : 'Linked' }
            showTooltip={true}
        />
    );
};

export default LinkButton;
