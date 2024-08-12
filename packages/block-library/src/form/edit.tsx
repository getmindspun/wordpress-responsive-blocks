import {useInnerBlocksProps} from '@wordpress/block-editor';
import {useEffect, useRef} from '@wordpress/element';

import {StylePortalClientId, useBlockPropsWithId} from '@mindspun/mrblx';

import './editor.scss';
import type {Props} from './types';

import Controls from './controls/Controls';
import template from './template';

import metadata from './block.json';

declare global {
    // noinspection JSUnusedGlobalSymbols
    interface Window {
        mrblxData: {
            rest_url: string;
        };
    }
}

export default function Edit(props: Props) {
    const blockProps = useBlockPropsWithId(props);
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        template,
    });
    const ref = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        if (
            window.mrblxData?.rest_url &&
            props.attributes.action === null &&
            props.attributes.encType === null
        ) {
            const action = `${window.mrblxData.rest_url}/form`;
            props.setAttributes({
                action,
                encType: 'application/json',
                method: 'POST',
            });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.style}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.labelStyle}
                selector={metadata.attributes.labelStyle.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.labelStyleRequiredIndicator}
                selector={metadata.attributes.labelStyleRequiredIndicator.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.labelStyleError}
                selector={metadata.attributes.labelStyleError.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.inputStyle}
                selector={metadata.attributes.inputStyle.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.inputStyleFocus}
                selector={metadata.attributes.inputStyleFocus.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.inputStyleError}
                selector={metadata.attributes.inputStyleError.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.selectStyle}
                selector={metadata.attributes.selectStyle.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.selectStyleFocus}
                selector={metadata.attributes.selectStyleFocus.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.selectStyleError}
                selector={metadata.attributes.selectStyleError.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.textAreaStyle}
                selector={metadata.attributes.textAreaStyle.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.textAreaStyleFocus}
                selector={metadata.attributes.textAreaStyleFocus.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.textAreaStyleError}
                selector={metadata.attributes.textAreaStyleError.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.checkboxContentStyle}
                selector={metadata.attributes.checkboxContentStyle.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.checkboxContentErrorStyle}
                selector={metadata.attributes.checkboxContentErrorStyle.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.helpStyle}
                selector={metadata.attributes.helpStyle.selector}
            />
            <StylePortalClientId
                clientId={props.clientId}
                attributes={props.attributes.fieldErrorStyle}
                selector={metadata.attributes.fieldErrorStyle.selector}
            />
            <Controls {...props} form={ref.current}/>
            <form {...innerBlocksProps} noValidate={true} ref={ref}/>
        </>
    );
}
