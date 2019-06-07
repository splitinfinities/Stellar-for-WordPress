<?php

/**
 * Register commonly used SEO,SDO, branding, and image ACF's.
 */
if (function_exists('get_field')) {
	// Responsible for setting up the brand tab at /wp-admin/admin.php?page=theme-general-settings
	require __DIR__ . '/../acf/brand.php';

	// Responsible for extra image settings, like preload color
	require __DIR__ . '/../acf/images.php';

	// Responsible for adding site-wide SEO features
	require __DIR__ . '/../acf/seo.php';

	// Responsible for adding site-wide Social Discovery features
	require __DIR__ . '/../acf/sdo.php';

	// Responsible for adding page specific SEO & Social Discovery features
	require __DIR__ . '/../acf/page-seo_and_sdo.php';

	// Responsible for loading site specific ACF. You paste this so ACF loads zippy quick.
	require __DIR__ . '/../acf/_site.php';

	// Responsible for loading the common blocks to use in the page builder
	require __DIR__ . '/../acf/blocks.php';
}


/**
 * Register blocks
 */
if( function_exists('acf_register_block') ) {

	acf_register_block(array(
		'name'				=> 'hero',
		'title'				=> __('Hero'),
		'description'		=> __('A custom hero block.'),
		'render_callback'	=> 'my_acf_block_render_callback',
		'category'			=> 'common',
		'icon'				=> 'layout',
		'keywords'			=> array( 'hero', 'quote' ),
		'enqueue_style' 	=> get_template_directory_uri() . '/blocks.css',
	));

	acf_register_block(array(
		'name'				=> 'content',
		'title'				=> __('Content'),
		'description'		=> __('A custom content block.'),
		'render_callback'	=> 'my_acf_block_render_callback',
		'category'			=> 'common',
		'icon'				=> 'layout',
		'keywords'			=> array( 'content', 'quote' ),
		'enqueue_style' 	=> get_template_directory_uri() . '/blocks.css',
	));

	acf_register_block(array(
		'name'				=> 'grid',
		'title'				=> __('Grid'),
		'description'		=> __('A custom grid block.'),
		'render_callback'	=> 'my_acf_block_render_callback',
		'category'			=> 'common',
		'icon'				=> 'grid-view',
		'keywords'			=> array( 'content', 'quote' ),
		'enqueue_style' 	=> get_template_directory_uri() . '/blocks.css',
	));
}


/**
 * Register settings page
 */
if (function_exists('acf_add_options_page')) {

	function plugin_admin_add_page() {
		acf_add_options_page(array(
			'page_title' 	=> 'Brand',
			'menu_title'	=> get_bloginfo('name'),
			'menu_slug' 	=> 'theme-general-settings',
			'redirect'		=> false,
			'position'		=> -1
		));

		acf_add_options_sub_page(array(
			'page_title' 	=> 'SEO (Search Engine Optimization)',
			'menu_title'	=> 'SEO',
			'parent_slug'	=> 'theme-general-settings',
		));

		acf_add_options_sub_page(array(
			'page_title' 	=> 'SDO (Social Discovery Optimization)',
			'menu_title'	=> 'SDO',
			'parent_slug'	=> 'theme-general-settings',
		));
	}

	add_action('admin_menu', 'plugin_admin_add_page');
}
