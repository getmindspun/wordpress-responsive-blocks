const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

const defaultConfig = require('@wordpress/scripts/config/webpack.config');

const plugins = defaultConfig.plugins.filter((plugin) => {
    return (
        plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'
    );
});

module.exports = {
    ...defaultConfig,
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
                if (request === '@mindspun/mrblx') {
                    return 'mrblx';
                }
            },
        }),
    ],
};
