<?php

// check function exists
if( function_exists('acf_register_block') ) {

	acf_register_block(array(
		'name'				=> 'hero',
		'title'				=> __('Hero'),
		'description'		=> __('A custom hero block.'),
		'render_callback'	=> 'my_acf_block_render_callback',
		'category'			=> 'common',
		'icon'				=> 'admin-comments',
		'keywords'			=> array( 'hero', 'quote' ),
		'enqueue_style' 	=> get_template_directory_uri() . '/blocks.css',
	));

	acf_register_block(array(
		'name'				=> 'content',
		'title'				=> __('Content'),
		'description'		=> __('A custom content block.'),
		'render_callback'	=> 'my_acf_block_render_callback',
		'category'			=> 'common',
		'icon'				=> 'admin-comments',
		'keywords'			=> array( 'content', 'quote' ),
		'enqueue_style' 	=> get_template_directory_uri() . '/blocks.css',
	));

	acf_register_block(array(
		'name'				=> 'carousel',
		'title'				=> __('Carousel'),
		'description'		=> __('A custom carousel block.'),
		'render_callback'	=> 'my_acf_block_render_callback',
		'category'			=> 'common',
		'icon'				=> 'admin-comments',
		'keywords'			=> array( 'carousel', 'quote' ),
		'enqueue_style' 	=> get_template_directory_uri() . '/blocks.css',
	));

	acf_register_block(array(
		'name'				=> 'statistics',
		'title'				=> __('Statistics'),
		'description'		=> __('A custom statistics block.'),
		'render_callback'	=> 'my_acf_block_render_callback',
		'category'			=> 'common',
		'icon'				=> 'admin-comments',
		'keywords'			=> array( 'carousel', 'quote' ),
		'enqueue_style' 	=> get_template_directory_uri() . '/blocks.css',
	));

	acf_register_block(array(
		'name'				=> 'page-list',
		'title'				=> __('Page List'),
		'description'		=> __('A custom page list block.'),
		'render_callback'	=> 'my_acf_block_render_callback',
		'category'			=> 'common',
		'icon'				=> 'admin-comments',
		'keywords'			=> array( 'carousel', 'quote' ),
		'enqueue_style' 	=> get_template_directory_uri() . '/blocks.css',
	));

	acf_register_block(array(
		'name'				=> 'calltoaction',
		'title'				=> __('Call to Action'),
		'description'		=> __('A custom call to action block.'),
		'render_callback'	=> 'my_acf_block_render_callback',
		'category'			=> 'common',
		'icon'				=> 'admin-comments',
		'keywords'			=> array( 'call', 'to', 'action', 'quote' ),
		'enqueue_style' 	=> get_template_directory_uri() . '/blocks.css',
	));

	acf_register_block(array(
		'name'				=> 'testimonial',
		'title'				=> __('Testimonial'),
		'description'		=> __('A custom testimonial block.'),
		'render_callback'	=> 'my_acf_block_render_callback',
		'category'			=> 'common',
		'icon'				=> 'admin-comments',
		'keywords'			=> array( 'testimonial', 'quote' ),
		'enqueue_style' 	=> get_template_directory_uri() . '/blocks.css',
	));
}
