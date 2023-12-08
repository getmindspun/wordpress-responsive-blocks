const defaultConfig = require('@wordpress/scripts/config/webpack.config');

const plugins = defaultConfig.plugins.filter((plugin) => {
    return (
        plugin.constructor.name !== 'CleanWebpackPlugin'
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
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', ...(defaultConfig.resolve ? defaultConfig.resolve.extensions || ['.js', '.jsx'] : [])]
    },
    plugins: [
        ...plugins
    ],
};
