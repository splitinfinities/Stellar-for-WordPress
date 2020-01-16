<?php
/**
 * Sets up Google Analytics
 * @return String - the UA set in the admin dashboard
 */
if (function_exists('get_field')) {
	global $wpdb;

	/**
	 * Configuration values
	 */
	$table = $wpdb->prefix . "options";
	$query = "SELECT `$table`.`option_value` FROM `$table` ";
	$seo_google_analytics_ua_code_query = $query . "WHERE `$table`.`option_name` = 'options_seo_google_analytics_ua_code' ";
	$seo_google_analytics_ua_code = $wpdb->get_var( $seo_google_analytics_ua_code_query );
	define('GOOGLE_ANALYTICS_ID', $seo_google_analytics_ua_code); // UA-XXXXX-Y (Note: Universal Analytics only, not Classic Analytics)
} else {
	define('GOOGLE_ANALYTICS_ID', ''); // UA-XXXXX-Y (Note: Universal Analytics only, not Classic Analytics)
}

function my_acf_block_render_callback( $block ) {
	// convert name ("acf/testimonial") into path friendly slug ("testimonial")
	$slug = str_replace('acf/', '', $block['name']);

	block($slug, $block);
}


/**
 * Add page slug to body_class() classes if it doesn't exist
 * @param  Array $classes array of already added classes
 * @return Array          Array of classes to be added to the DOM
 */
function splitinfinities_body_class($classes) {
	// Add post/page slug
	if (is_single() || is_page() && !is_front_page()) {
		if (!in_array(basename(get_permalink()), $classes)) {
			$classes[] = basename(get_permalink());
		}
	}
	return $classes;
}
add_filter('body_class', 'splitinfinities_body_class');

function override_mce_options($initArray) {
	$opts = '*[*]';
	$initArray['valid_elements'] = $opts;
	$initArray['extended_valid_elements'] = $opts;
	return $initArray;
}
add_filter('tiny_mce_before_init', 'override_mce_options');

/**
 * Remove all default woocommerce styles
 * @return null
 */
add_filter( 'woocommerce_enqueue_styles', 'splitinfinities_dequeue_styles' );
function splitinfinities_dequeue_styles( $enqueue_styles ) {
	return $enqueue_styles;
}

function register_splitinfinities_menu() {
	register_nav_menu( 'header', __( 'Header' ) );
	register_nav_menu( 'footer_one', __( 'Footer One' ) );
	register_nav_menu( 'footer_two', __( 'Footer Two' ) );
	register_nav_menu( 'footer_three', __( 'Footer Three' ) );
	register_nav_menu( 'footer_four', __( 'Footer Four' ) );
}
add_action( 'init', 'register_splitinfinities_menu' );

/**
 * Initialize all of the theme's stuff
 * @return null
 */
function splitinfinities_setup() {
	// Add post thumbnails
	add_theme_support('post-thumbnails');
	add_theme_support( 'woocommerce' );
	add_theme_support( 'menus' );
	remove_theme_support( 'wc-product-gallery-zoom' );
	remove_theme_support( 'wc-product-gallery-lightbox' );
	remove_theme_support( 'wc-product-gallery-slider' );

	remove_action( 'wp_head', 'wp_generator' );
	remove_action( 'wp_head', 'wlwmanifest_link' );
	remove_action( 'wp_head', 'rsd_link' );
	remove_action( 'wp_head', 'feed_links', 2 );
	remove_action( 'wp_head', 'feed_links_extra', 3 );

	// Remove WP emoji stuff
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );

	remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
	remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

}
add_action('after_setup_theme', 'splitinfinities_setup');
