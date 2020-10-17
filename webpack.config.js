const toml = require( 'toml' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
let localEnv = '';

// Check if local.json exists
try {
	localEnv = require( './local.json' ).devURL;
} catch ( err ) {
	// Fallback if it does not
	localEnv = 'https://iceberg.test';
}

// https://stackoverflow.com/questions/35903246/how-to-create-multiple-output-paths-in-webpack-config
// The admin config.
var adminConfig = Object.assign({}, defaultConfig, {
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /.toml/,
				type: 'json',
				parser: {
					parse: toml.parse,
				},
			},
		],
	},
	optimization: {
		...defaultConfig.optimization,
	},
	plugins: [
		...defaultConfig.plugins,
		new BrowserSyncPlugin(
			{
				host: 'localhost',
				port: 3000,
				proxy: localEnv,
				open: true,
				files: [ 'build/*.php', 'build/*.js', 'build/*.css' ],
			},
			{
				injectCss: true,
				reload: false,
			}
		),
	],
});

var frontEndConfig = {
	entry: './src/front-index.js',
	output: {
		filename: 'front.bundle.js',
	},
	externals: {
		react: 'React',
		reactDom: 'ReactDom'
	},
	module: {
		...defaultConfig.module
	},
};

module.exports = [ adminConfig, frontEndConfig ];
