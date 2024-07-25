const path = require('path');

module.exports = {
    parserOptions: {
        requireConfigFile: false,
    },
    extends: [ 'plugin:@wordpress/eslint-plugin/recommended', 'plugin:storybook/recommended' ],
    rules: {
        'import/no-extraneous-dependencies': 'off',
        '@wordpress/no-unsafe-wp-apis': 'off',
        'import/no-unresolved': 'error'
    },
    overrides: [
        {
            'files': ['**/*.stories.tsx'],
            'rules': {
                'react-hooks/rules-of-hooks': 'off'
            }
        },
        {
            'files': ['*.tsx', '*.ts'],
            'rules': {
                'jsx-a11y/label-has-associated-control': 'off',
                'jsx-a11y/no-autofocus': 'off'
            }
        }
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            'eslint-import-resolver-custom-alias': {
                alias: {
                    '~shared': './packages/block-library/src/_shared',
                },
                extensions: ['.ts', '.tsx'],
            }
        }
    }
}
