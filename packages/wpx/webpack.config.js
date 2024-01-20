const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

const defaultConfig = require('@wordpress/scripts/config/webpack.config');

const plugins = defaultConfig.plugins.filter(plugin => {
    return (
        plugin.constructor.name !== 'CleanWebpackPlugin' &&
            plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'
    );
});

module.exports = {
    ...defaultConfig,
    target: 'web',
    entry: {
        'wpx': './index.ts',
    },
    output: {
        libraryTarget: 'var',
        library: ['wpx'],
        path: defaultConfig.output.path
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
                        }
                    }]
            }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', ...(defaultConfig.resolve ? defaultConfig.resolve.extensions || ['.js', '.jsx'] : [])]
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
        })
    ],
};
