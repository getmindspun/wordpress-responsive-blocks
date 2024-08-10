import {useState} from '@wordpress/element';
import {SnackbarList} from '@wordpress/components';

import {useEvent} from '~shared/hooks/useEvent';
import type {CustomEvent} from '~shared/types';
import {FlashEventDetail} from './types';

let nextId = 1;

type FlashMessage = {
    id: string,
    content: string,
    status?: 'success' | 'warning' | 'error' | 'info' | undefined,
}

const FlashMessages = (props: {
    form: HTMLFormElement
}) => {
    const [messages, setMessages] = useState<FlashMessage[]>([]);

    const eventHandler = (event: CustomEvent) => {
        const detail = (event as unknown as { detail: FlashEventDetail }).detail;

        /* Only respond to event related to us. */
        if (detail.form === props.form) {
            const newMessages = [...messages, {id: `${nextId++}`, content: detail.message, type: detail.type}];
            setMessages(newMessages);
        }
    };

    useEvent('mrblx.form.flash', eventHandler);
    useEvent('reset', () => setMessages([]));

    function onRemove(id: string) {
        const newMessages = messages.filter(message => message.id !== id);
        setMessages(newMessages);
    }

    return (
        <SnackbarList
            notices={messages.map(message => {
                return {
                    id: message.id,
                    status: message.status ? message.status : 'success',
                    content: message.content
                }
            })}
            onRemove={onRemove}
        />
    );
}

export default FlashMessages;
