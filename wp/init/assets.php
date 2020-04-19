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
		'app.js' => get_template_directory_uri() . $assets_basepath . '/stellar/stellar-core.js',
		'app.esm.js' => get_template_directory_uri() . $assets_basepath . '/stellar/stellar-core/stellar-core.esm.js',
		'app.nomodule.js' => get_template_directory_uri() . $assets_basepath . '/stellar/stellar-core/stellar-core.js',
		'app.css' => get_template_directory_uri() . $assets_basepath . '/stellar/stellar-core/stellar-core.css',
		'theme' => get_template_directory_uri() . '/style.css',
	);

	// Embed resources that we need
	enqueue_load($base_assets);
}
add_action('wp_enqueue_scripts', 'prepare_scripts', 100);
add_action('admin_enqueue_scripts', 'prepare_scripts', 100000000);

add_filter( 'script_loader_tag', 'add_id_to_script', 10, 3 );

function add_id_to_script( $tag, $handle, $source ) {
    if (strpos($handle, 'esm') !== false) {
        $tag = '<script type="module" src="' . $source . '" ></script>';
    } else if (strpos($handle, 'nomodule') !== false) {
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

	sendo()->esm = true;

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
		$deps = false;
	} else {
		$deps = array(  );
	}


	wp_enqueue_style('app.css', $assets['app.css'], $deps, null);
	wp_enqueue_style('theme', $assets['theme'], $deps, null);

	if (sendo()->esm) {
		wp_enqueue_script('app.esm.js', $assets['app.esm.js'], array(), null, true);
		wp_enqueue_script('app.nomodule.js', $assets['app.nomodule.js'], array(), null, true);
	} else {
		wp_enqueue_script('app.js', $assets['app.js'], array(), null, true);
	}

	wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.4.1.min.js', array(), null, true);
}

add_action('admin_head', 'admin_css_overrides');

add_filter( 'wp_service_worker_navigation_caching_strategy', function() {
    return WP_Service_Worker_Caching_Routes::STRATEGY_STALE_WHILE_REVALIDATE;
} );

add_filter( 'wp_service_worker_navigation_caching_strategy_args', function( $args ) {
    $args['cacheName'] = 'pages';
    $args['plugins']['expiration']['maxEntries'] = 50;
    return $args;
} );

function get_manifest_update( $manifest ) {
	// Add argument to $manifest array
	$manifest['short_name'] = 'Launch';
	$manifest['name'] = 'Launch Brewing';
	return $manifest;
}

add_filter( 'web_app_manifest', 'get_manifest_update' );

function admin_css_overrides() {
  echo '<style>
	a {
		color: #0073aa;
	}
	.current {
		color: white !important
	}

	.ac_match, .subsubsub a.current {
		color: #000 !important;
	}

	h1, h2, h3, h4, h5, h6, p {
		max-width: initial;
		line-height: 1.4;
	}

	h2 {
		max-width: initial;
		font-size: 1.3em;
	}

	.fs7, p {
		font-size: .825rem;
	}
  </style>';
}
