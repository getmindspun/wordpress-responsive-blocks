const path = require('path');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

const defaultConfig = require('@wordpress/scripts/config/webpack.config');

const plugins = defaultConfig.plugins.filter((plugin) => {
    return (
        plugin.constructor.name !== 'CleanWebpackPlugin' &&
        plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'
    );
});


const outputPath = process.env.BUILD_PATH ? process.env.BUILD_PATH : path.join(__dirname, '..', '..', 'dist');

module.exports = {
    ...defaultConfig,
    target: 'web',
    entry: {
        mrblx: './index.ts',
    },
    output: {
        libraryTarget: 'var',
        library: ['mrblx'],
        path: path.resolve(outputPath),
    },
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                            transpileOnly: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        ...plugins,
        new DependencyExtractionWebpackPlugin({
            combineAssets: false,
            combinedOutputFile: null,
            externalizedReport: false,
            injectPolyfill: false,
            outputFormat: 'php',
            outputFilename: null,
            useDefaults: true,
            requestToExternal(request) {
                if (request === 'codemirror') {
                    return ['wp', 'CodeMirror'];
                }
            },
            requestToHandle(request) {
                if (request === 'codemirror') {
                    return 'wp-codemirror';
                }
            },
        }),
    ],
};
