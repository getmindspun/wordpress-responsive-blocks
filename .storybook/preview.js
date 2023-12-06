/** @type { import('@storybook/react').Preview } */
import '@wordpress/components/build-style/style.css';
import './store';

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
