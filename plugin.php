<?php
/**
 * Plugin Name:     Fill in the blanks poetry
 * Description:     A poetry builder with user input.
 * Version:         0.1.0
 * Author:          JJ
 * License:         GPL-2.0-or-later
 * Text Domain:     just-to-say
 *
 * @package         just-to-say
 */

namespace  MJJWhy\JustToSay;

use MJJWhy\JustToSay\Hooks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Loads the plugin language files.
 *
 * @access public
 * @since 1.0.0
 * @return void
 */
function load_textdomain() {
	load_plugin_textdomain( 'just-to-say', false, dirname( plugin_basename( plugin_dir_path( __FILE__ ) ) ) . '/languages/' );
}

add_action( 'plugins_loaded', __NAMESPACE__ . '\load_textdomain', 99 );

function front_end_scripts() {
	wp_enqueue_script( 'mjj-to-say', plugins_url( '/dist/front.bundle.js', __FILE__ ), ['react', 'react-dom'], '0.0.1', true );
}
add_action( 'init', __NAMESPACE__ . '\front_end_scripts' );

/**
 * Enqueue localization data for our blocks.
 *
 * @access public
 */
function block_localization() {
	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( 'just-to-say' );
	}
}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_localization' );

/**
 * Enqueue block assets for use within Gutenberg.
 *
 * @access public
 */
function block_assets() {

	// Styles.
	wp_enqueue_style(
		'just-to-say-mjj-to-say-frontend',
		plugins_url( '/build/style-index.css', __FILE__ ),
		array(),
		asset_file( 'style-index', 'version' )
	);
}

add_action( 'enqueue_block_assets', __NAMESPACE__ . '\block_assets' );

/**
 * Enqueue block assets for use within Gutenberg.
 *
 * @access public
 */
function editor_assets() {

	if ( ! is_admin() ) {
		return;
	}

	// Styles.
	wp_enqueue_style(
		'just-to-say-mjj-to-say-editor',
		plugins_url( '/build/index.css', __FILE__ ),
		array(),
		asset_file( 'index', 'version' )
	);

	// Scripts.
	wp_enqueue_script(
		'just-to-say-mjj-to-say-editor',
		plugins_url( '/build/index.js', __FILE__ ),
		array_merge( asset_file( 'index', 'dependencies' ), [ 'wp-api', 'wp-compose' ] ),
		asset_file( 'index', 'version' ),
		false
	);

}

add_action( 'enqueue_block_assets', __NAMESPACE__ . '\editor_assets' );

/**
 * Get asset file.
 *
 * @param string $handle Asset handle to reference.
 * @param string $key What do we want to return: version or dependencies.
 */
function asset_file( $handle, $key ) {
	$default_asset_file = array(
		'dependencies' => array(),
		'version'      => '1.0',
	);

	$asset_filepath = plugin_dir_path( __FILE__ ) . "/build/{$handle}.asset.php";
	$asset_file     = file_exists( $asset_filepath ) ? include $asset_filepath : $default_asset_file;

	if ( 'version' === $key ) {
		return $asset_file['version'];
	}

	if ( 'dependencies' === $key ) {
		return $asset_file['dependencies'];
	}
}

// Register server-side code for individual blocks.
foreach ( glob( dirname( __FILE__ ) . '/src/blocks/*/index.php' ) as $block_logic ) {
	require_once $block_logic;
}

// Get all the php dependencies.
require dirname( __FILE__ ) . '/vendor/autoload.php';

$hooks = new Hooks();
$hooks->add_hooks();
