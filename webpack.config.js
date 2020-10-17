const toml = require( 'toml' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
let localEnv = '';
let frontEndEnv = '';

// Check if local.json exists
try {
	localEnv = require( './local.json' ).devURL;
	frontEndEnv = require( './local.json' ).frontEndURL;
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
	mode: defaultConfig.mode, // Otherwise this fails for some reason. Maybe the external React dependency? I don't know.
	devtool: 'inline-source-map',
	entry: './src/front-index.js',
	output: {
		filename: 'front.bundle.js',
		pathinfo: false
	},
	externals: ( defaultConfig.mode === 'production' ) ? {
		react: 'React',
		reactDom: 'ReactDom',
	} : {},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	optimization: {
		...defaultConfig.optimization,
	},
	stats: {maxModules: Infinity, exclude: undefined},
	plugins: [
		new BrowserSyncPlugin(
			{
				host: 'localhost',
				port: 3000,
				proxy: frontEndEnv,
				open: true,
				files: [ 'dist/front.bundle.js' ],
			},
			{
				injectCss: true,
				reload: false,
			}
		),
	],
};

module.exports = [ adminConfig, frontEndConfig ];
