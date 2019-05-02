<?php

// check function exists
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
