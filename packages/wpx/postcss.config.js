/** @type {import('postcss-load-config').Config} */
const isProduction = process.env.NODE_ENV === 'production';
const postcssPlugins = require('@wordpress/postcss-plugins-preset');

const config = {
	ident: 'postcss',
	sourceMap: !isProduction,
	plugins: isProduction
		? [
				...postcssPlugins,
				require('cssnano')({
					// Provide a fallback configuration if there's not
					// one explicitly available in the project.
					preset: [
						'default',
						{
							discardComments: {
								removeAll: true,
							},
						},
					],
				}),
			]
		: postcssPlugins,
};

module.exports = config;
