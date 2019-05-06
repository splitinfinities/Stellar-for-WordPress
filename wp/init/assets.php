<?php

/**
 * Scripts and stylesheets
 *
 * Enqueue stylesheets in the following order:
 * 1. /theme/assets/css/main.css
 *
 * @return null
 */
function prepare_scripts() {
	$assets_basepath = '/assets';

	$base_assets = array(
		'app.css' => get_template_directory_uri() . $assets_basepath . '/stellar/stellar-core/stellar-core.css',
		'app.esm.js' => get_template_directory_uri() . $assets_basepath . '/stellar/stellar-core/stellar-core.esm.js',
		'app.js' => get_template_directory_uri() . $assets_basepath . '/stellar/stellar-core/stellar-core.js',
	);

	// Embed resources that we need
	enqueue_load($base_assets);
}
add_action('wp_enqueue_scripts', 'prepare_scripts', 100);
add_action('admin_enqueue_scripts', 'prepare_scripts');

add_filter( 'script_loader_tag', 'add_id_to_script', 10, 3 );

function add_id_to_script( $tag, $handle, $source ) {
    if (strpos($handle, 'esm') !== false) {
        $tag = '<script type="module" src="' . $source . '" ></script>';
    } else {
        $tag = '<script nomodule src="' . $source . '" ></script>';
	}

	return $tag;
}

/**
 * Loads the scripts we need on first page load
 * @param  Array $assets Array of script uri's
 * @return null
 */
function enqueue_load($assets) {
	// Embed all resources
	$css_files = sendo()->css;

	foreach ($css_files as $css) {
		wp_enqueue_style('splitinfinities_' . basename($css, '.css'), $css, false, null);
	}

	/**
	 * jQuery is loaded using the same method from HTML5 Boilerplate:
	 * Grab Google CDN's latest jQuery with a protocol relative URL; fallback to local if offline
	 * It's kept in the header instead of footer to avoid conflicts with plugins.
	 */
	if (!is_admin()) {
		wp_deregister_script('jquery');
	}

	wp_enqueue_style('app.css', $assets['app.css'], false, null);
	wp_enqueue_script('app.js', $assets['app.js'], array(), null, true);
	wp_enqueue_script('app.esm.js', $assets['app.esm.js'], array(), null, true);
	wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.3.1.min.js', array(), null, true);

}
