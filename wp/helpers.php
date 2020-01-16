<?php

/**
 * component - Load component partials without dealing with writing the directory
 */
function component( $slug, $options = [] ) {
	hm_get_template_part('components/' . $slug, $options);
}

/**
 * block - Load block partials without dealing with writing the directory
 */
function block( $slug, $options = [], $name = null ) {
	hm_get_template_part('blocks/' . $slug . '/' . $slug, $name, $options);
}

/**
 * content - Load block partials without dealing with writing the directory
 */
function content( $slug, $name = null ) {
	get_template_part('content/' . $slug, $name);
}

/**
 * Like get_template_part() put lets you pass args to the template file
 * Args are available in the template as $template_args array
 * @param string filepart
 * @param mixed wp_args style argument list
 */
function hm_get_template_part( $file, $name = null, $template_args = array(), $cache_args = array() ) {
    $template_args = wp_parse_args( $template_args );
    $cache_args = wp_parse_args( $cache_args );
    if ( $cache_args ) {
        foreach ( $template_args as $key => $value ) {
            if ( is_scalar( $value ) || is_array( $value ) ) {
                $cache_args[$key] = $value;
            } else if ( is_object( $value ) && method_exists( $value, 'get_id' ) ) {
                $cache_args[$key] = call_user_method( 'get_id', $value );
            }
        }
        if ( ( $cache = wp_cache_get( $file, serialize( $cache_args ) ) ) !== false ) {
            if ( ! empty( $template_args['return'] ) )
                return $cache;
            echo $cache;
            return;
        }
    }
    $file_handle = $file;
    do_action( 'start_operation', 'hm_template_part::' . $file_handle );
    if ( file_exists( get_stylesheet_directory() . '/' . $file . ($name ? "-$name" : "") . '.php' ) )
        $file = get_stylesheet_directory() . '/' . $file . ($name ? "-$name" : "") . '.php';
    elseif ( file_exists( get_template_directory() . '/' . $file . ($name ? "-$name" : "") . '.php' ) )
        $file = get_template_directory() . '/' . $file . ($name ? "-$name" : "") . '.php';
    ob_start();
    $return = require( $file );
    $data = ob_get_clean();
    do_action( 'end_operation', 'hm_template_part::' . $file_handle );
    if ( $cache_args ) {
        wp_cache_set( $file, $data, serialize( $cache_args ), 3600 );
    }
    if ( ! empty( $template_args['return'] ) )
        if ( $return === false )
            return false;
        else
            return $data;
    echo $data;
}


/**
 * Turns an array to a string
 */
function array_to_html_attributes($array) {
	$ff = true;
	$sep = "=";
	$out = "";

	foreach($array as $key => $val) {
		if ($key) {
			$out .= $key . '="' . $val .'" ';
		}
	}

	return $out;
}

/**
 * Make a full url relative
 */
function make_href_root_relative($input) {
	return preg_replace('!http(s)?://' . $_SERVER['SERVER_NAME'] . '/!', '/', $input);
}

function taxonomy_query($haystack, $taxonomy) {
	$result = [];
	$needles = explode(",", $haystack);

	return array(
		array(
			'taxonomy' => $taxonomy,
			'field' => 'slug', 
			'terms' => explode(",", $haystack),
			'include_children' => false
		)
	);
}