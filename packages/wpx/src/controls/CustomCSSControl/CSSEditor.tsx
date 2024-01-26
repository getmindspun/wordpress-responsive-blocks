import CodeMirror from 'codemirror';

import {useCallback, useEffect, useState} from '@wordpress/element';

const CSSEditor = (props: {
    value: string | undefined,
    onChange: (value: string) => void
}) => {
    const [codemirror, setCodeMirror] = useState<CodeMirror.Editor|null>(null);

    const createEditor = useCallback((node: HTMLDivElement) => {
        if (node) {
            let editor = codemirror;
            if (!editor) {
                editor = CodeMirror(node, {
                    value: props.value || '',
                    mode: "css",
                    lineNumbers: true,
                    viewportMargin: Infinity,
                });
                setCodeMirror(editor);
                editor.focus();
            }

            /* Change function can update. */
            editor.getDoc().on('change', function (doc, arg) {
                const newValue = doc.getValue();
                if (props.value !== newValue && arg.origin !== 'setValue') {
                    props.onChange(doc.getValue());
                }
            });
        }
    }, [props.onChange]);

    useEffect(() => {
        const doc = codemirror?.getDoc();
        if (doc && doc.getValue() !== props.value) {
            doc.setValue(props.value || '');
        }
    }, [props.value])

    return (
        <div ref={createEditor}/>
    );
}

export default CSSEditor;
