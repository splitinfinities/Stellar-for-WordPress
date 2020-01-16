<?php

/**
 * Start WP-login custom logo
 *
 */
function splitinfinities_login_logo() {
	$color = get_field('brand_site_theme', 'options');

	?>
		<script>
			setTimeout(() => {
				var head = document.querySelector('#login h1');
				head.innerHTML = '<img src="<?php echo get_template_directory_uri() ?>/assets/src/global/images/mark@2x.png" />';
			})
		</script>
		<style type="text/css">
			#svg { display: none; }

			#login h1 {
				color: white;
				fill: white;
				width: 180px;
				margin: auto;
			}

			#login h1 img {
				width: 180px;
			}
		</style>
	<?php
}
add_action( 'login_enqueue_scripts', 'splitinfinities_login_logo' );

add_theme_support( 'custom-logo', array(
	'height'      => 100,
	'width'       => 100,
	'flex-height' => true,
	'flex-width'  => true,
	'header-text' => array( 'site-title', 'site-description' ),
) );

function the_theme_logo() {
	$custom_logo_id = get_theme_mod( 'custom_logo' );

	if ($custom_logo_id) {
		$image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
		echo do_shortcode("[smart_image image_id=$custom_logo_id block nozoom bg='transparent' class='logo' priority='true']");
	} else {
		echo '<ion-icon src="' . get_template_directory_uri() .'/assets/vector/mark.svg" height="100" width="100" class="fs4 logo"></ion-icon>';
	}
} 

/**
 * Stops the settings page name in the dashboard from wrapping in an ugly way
 *
 */
function splitinfinities_custom_css() {
	echo '<style>
		a[href="admin.php?page=theme-general-settings"] .wp-menu-name {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			padding-right: 10px !important;
		}
		:root {
			--ms-ratio: .975;
		}
	</style>';
}
add_action('admin_head', 'splitinfinities_custom_css');


/**
 * Hide the bar when browsing the site
 *
 */
add_filter('show_admin_bar', '__return_false');
