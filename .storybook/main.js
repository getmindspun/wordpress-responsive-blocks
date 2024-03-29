import * as path from 'path';

/** @type {{webpackFinal: (function(*): any), stories: string[], framework: {name: string, options: {}}, docs: {autodocs: string}, addons: [string,{name: string, options: {rules: [{test: RegExp, use: [string,{loader: string, options: {}}], sideEffects: boolean},{test: RegExp, use: [string,{loader: string, options: {importLoaders: number}},string,{loader: string, options: {sassOptions: {}, sourceMap: boolean, implementation: string}}], sideEffects: boolean}]}}]}} */
const config = {
    stories: [
        '../packages/mrblx/src/BaseControls.stories.tsx',
        '../packages/mrblx/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-styling-webpack',
        {
            name: '@storybook/addon-styling-webpack',

            options: {
                rules: [
                    {
                        test: /\.css$/,
                        sideEffects: true,
                        use: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {},
                            },
                        ],
                    },
                    {
                        test: /\.s[ac]ss$/,
                        sideEffects: true,
                        use: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {

                                    importLoaders: 2,
                                },
                            },
                            require.resolve('resolve-url-loader'),
                            {
                                loader: require.resolve('sass-loader'),
                                options: {
                                    // Want to add more Sass options? Read more here: https://webpack.js.org/loaders/sass-loader/#options
                                    implementation: require.resolve('sass'),
                                    sourceMap: true,
                                    sassOptions: {},
                                },
                            },
                        ],
                    },
                ],
            }
        }
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: (config) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Storybook uses its own webpack config, so we need to merge our config with it
        // See https://storybook.js.org/docs/configurations/custom-webpack-config/

        // Add typescript loader to process TS-files from other packages
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                    options: {
                        transpileOnly: true
                    }
                },
            ],
            exclude: [path.join(__dirname, 'packages/mrblx/node_modules')]
        });

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    }
};
export default config;
