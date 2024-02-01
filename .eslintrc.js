module.exports = {
    parserOptions: {
        requireConfigFile: false,
    },
    extends: [ 'plugin:@wordpress/eslint-plugin/recommended', 'plugin:storybook/recommended' ],
    rules: {
        'import/no-extraneous-dependencies': 'off',
        '@wordpress/no-unsafe-wp-apis': 'off',
    },
    overrides: [
        {
            'files': ['**/*.stories.tsx'],
            'rules': {
                'react-hooks/rules-of-hooks': 'off'
            }
        },
        {
            'files': ['packages/wpx/src/components/ControlHeader/ControlHeader.tsx'],
            'rules': {
                'jsx-a11y/label-has-associated-control': 'off'
            }
        }
    ]
}
