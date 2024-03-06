const {join} = require('path');

module.exports = {
    assetsPath: join(__dirname, 'assets'),
    blockTemplatesPath: join(__dirname, 'templates', 'block'),
    defaultValues: {
        attributes: {
            blockId: {
                type: 'string',
            },
            style: {
                type: 'object',
                default: {},
            },
        },
        npmDevDependencies: [
            '@mindspun/mrblx',
            '@wordpress/i18n',
            'shx'
        ],
        customScripts: {
            postinstall: 'npx shx cp -f assets/webpack.config.js .',
        },
    },
};
