<?php

/**
 * Helper class to add Custom Post Types
 * @return null
 */
function init_custom_post_types() {
	$post_types = array(
		'event' => array(
			'title' => "Events",
			'singular' => "Event",
			'plural' => "Events",
			'slug' => "event",
			'position' => -1,
			'has_archive' => true,
			'menu_icon' => '',
			'supports' => array('title', 'permalink'),
			'taxonomies' => array()
		)
	);

	if ($enable_events) {
		$post_types['event'] = array(
			'title' => "Events",
			'singular' => "Event",
			'plural' => "Events",
			'slug' => "event",
			'position' => -1,
			'has_archive' => true,
			'menu_icon' => '',
			'supports' => array('title', 'permalink'),
			'taxonomies' => array()
		);
	}

	foreach ($post_types as $name => $options) {
		$labels = array(
			'name'               => _x( $options['title'], 'post type general name', 'stellar' ),
			'singular_name'      => _x( $options['singular'], 'post type singular name', 'stellar' ),
			'menu_name'          => _x( $options['title'], 'admin menu', 'stellar' ),
			'name_admin_bar'     => _x( $options['singular'], 'add new on admin bar', 'stellar' ),
			'add_new'            => _x( 'Add ' . $options['singular'], $name, 'stellar' ),
			'add_new_item'       => __( 'Add New ' . $options['singular'], 'stellar' ),
			'new_item'           => __( 'New ' . $options['singular'], 'stellar' ),
			'edit_item'          => __( 'Edit ' . $options['singular'], 'stellar' ),
			'view_item'          => __( 'View ' . $options['singular'], 'stellar' ),
			'all_items'          => __( 'All ' . $options['plural'], 'stellar' ),
			'search_items'       => __( 'Search ' . $options['plural'], 'stellar' ),
			'parent_item_colon'  => __( 'Parent ' . $options['plural'], 'stellar' ),
			'not_found'          => __( 'No ' . strtolower($options['plural']) . ' found.', 'stellar' ),
			'not_found_in_trash' => __( 'No ' . strtolower($options['plural']) . ' found in Trash.', 'stellar' )
		);

		$args = array(
			'labels'             => $labels,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => $options['slug'], 'with_front' => true ),
			'capability_type'    => 'post',
			'has_archive'        => $options['has_archive'],
			'hierarchical'       => true,
			'show_in_rest'       => true,
			'menu_position'      => $options['position'],
			'menu_icon'          => $options['menu_icon'],
			'supports'           => $options['supports'],
			'taxonomies'         => $options['taxonomies'],
		);

		register_post_type( $name, $args );
	}
}
add_action( 'init', 'init_custom_post_types' );
