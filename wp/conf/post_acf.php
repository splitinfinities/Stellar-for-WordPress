<?php

/**
 * Register commonly used SEO,SDO, branding, and image ACF's.
 */
if( function_exists('acf_add_local_field_group') ):
	// Enqueues content templates
	require __DIR__ . '/../acf/templates.php';

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

	// Responsible for site features
	require __DIR__ . '/../acf/site_features.php';

endif;

/**
 * Register blocks
 */
if (function_exists('acf_register_block') ) {

	$blocks = get_field('gutenberg_blocks', 'options');

	if ($blocks === null) {
		$blocks = [];
	}

	if (in_array("hero", $blocks)):
		include __DIR__ . '/../acf/block/hero.php';
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
	endif;

	if (in_array("content", $blocks)):
		include __DIR__ . '/../acf/block/content.php';
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
	endif;

	if (in_array("grid", $blocks)):
		include __DIR__ . '/../acf/block/grid.php';
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

	endif;

	if (in_array("mosaic", $blocks)):
		include __DIR__ . '/../acf/block/mosaic.php';
		acf_register_block(array(
			'name'				=> 'mosaic',
			'title'				=> __('Mosaic'),
			'description'		=> __('A custom mosaic block.'),
			'render_callback'	=> 'my_acf_block_render_callback',
			'category'			=> 'common',
			'icon'				=> 'grid-view',
			'keywords'			=> array( 'content', 'quote' ),
			'enqueue_style' 	=> get_template_directory_uri() . '/blocks.css',
		));

	endif;

	if (in_array("pagelist", $blocks)):
		include __DIR__ . '/../acf/block/pagelist.php';
		acf_register_block(array(
			'name'				=> 'pagelist',
			'title'				=> __('Page list'),
			'description'		=> __('A custom Page list block.'),
			'render_callback'	=> 'my_acf_block_render_callback',
			'category'			=> 'common',
			'icon'				=> 'grid-view',
			'keywords'			=> array( 'content', 'quote' )
		));

	endif;

	if (in_array("spacer", $blocks)):
		include __DIR__ . '/../acf/block/spacer.php';
		acf_register_block(array(
			'name'				=> 'spacer',
			'title'				=> __('Spacer'),
			'description'		=> __('A custom spacer block.'),
			'render_callback'	=> 'my_acf_block_render_callback',
			'category'			=> 'common',
			'icon'				=> 'grid-view',
			'keywords'			=> array( 'content', 'quote' )
		));

	endif;

	if (in_array("tab", $blocks)):
		include __DIR__ . '/../acf/block/tab.php';
		acf_register_block(array(
			'name'				=> 'tabs',
			'title'				=> __('Tabs'),
			'description'		=> __('A custom tabs block.'),
			'render_callback'	=> 'my_acf_block_render_callback',
			'category'			=> 'common',
			'icon'				=> 'grid-view',
			'keywords'			=> array( 'content', 'quote' )
		));
	endif;
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
			'page_title' 	=> 'Site Features',
			'menu_title'	=> 'Features',
			'parent_slug'	=> 'theme-general-settings',
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

		acf_add_options_sub_page(array(
			'page_title' 	=> 'Third Party API\'S',
			'menu_title'	=> 'API\'s',
			'parent_slug'	=> 'theme-general-settings',
		));
	}

	add_action('admin_menu', 'plugin_admin_add_page');
}
