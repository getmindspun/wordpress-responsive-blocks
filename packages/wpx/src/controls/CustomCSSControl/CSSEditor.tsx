import CodeMirror from 'codemirror';

import {useCallback, useState} from '@wordpress/element';

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
                    value: props.value || "",
                    mode: "css",
                    lineNumbers: true,
                    viewportMargin: Infinity,
                });
                setCodeMirror(editor);
            }

            /* Change function can update. */
            editor.getDoc().on('change', function (doc) {
                props.onChange(doc.getValue());
            });
        }
    }, [props.onChange]);

    return (
        <div ref={createEditor}/>
    );
}

export default CSSEditor;
