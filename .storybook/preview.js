/** @type { import('@storybook/react').Preview } */
import '@wordpress/components/build-style/style.css';
import 'codemirror/lib/codemirror.css';

import './store';
import '../packages/wpx/src/store';

import 'codemirror/mode/css/css';

const preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        options: {
            storySort: {
                method: 'configure',
                includeNames: false,
                order: ['controls', 'components']
            }
        }
    },
};

export default preview;
