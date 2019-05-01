<?php

/**
 * Remove P tag from WordPress img tag in the_content
 *
 */
function filter_ptags_on_images($content){
	return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
}
add_filter('the_content', 'filter_ptags_on_images');
add_filter('acf_the_content', 'filter_ptags_on_images');

/**
 * Add default content to MCE
 *
 */
function splitinfinities_editor_content( $content ) {
	$content = '<h1>Get Started</h1>
	<p>Here&rsquo;s some lead in copy.</p>';
	return $content;
}
add_filter( 'default_content', 'splitinfinities_editor_content' );

/**
 * Remove links on embedded images
 *
 */
function wpb_imagelink_setup() {
	$image_set = get_option( 'image_default_link_type' );

	if ($image_set !== 'none') {
		update_option('image_default_link_type', 'none');
	}
}
add_action('admin_init', 'wpb_imagelink_setup', 10);

/**
 * Swaps images out with preloading smart images when rendering the HTML
 */
function splitinfinities_swap_all_image_tags($content) {

	// Get all the images and put them into an array, $image_tags
	preg_match_all("/<img[^>]+\>/i", $content, $image_tags, PREG_SET_ORDER);

	$image_ids_in_order = array();

	// Loops though the image tags and prepare the smart image shortcode
	foreach ($image_tags as $image_tag) {
		preg_match_all('/(class)=("[^"]*")/i', $image_tag[0], $this_tags_classes);

		preg_match_all('/(width)=("[^"]*")/i', $image_tag[0], $this_tags_width);
		preg_match_all('/(height)=("[^"]*")/i', $image_tag[0], $this_tags_height);

		$image_id = false;

		$our_classes = [];

		if ($this_tags_classes[0]) {
			$this_tags_classes = substr($this_tags_classes[0][0], 7, -1);

			$our_classes = $this_tags_classes;

			$this_tags_classes = explode(' ', $this_tags_classes);

			foreach($this_tags_classes as $a_class) {

				if (strpos($a_class, 'wp-image-') === 0) {
					preg_match_all('!\d+!', $a_class, 	$id);
					$image_id = (int) $id[0][0];
				}
			}
		}

		if ($image_id !== false) {
			$image_ids_in_order[$image_id] = array(
				'string_to_replace' => $image_tag[0],
				'width' => (int) substr($this_tags_width[2][0], 1, -1),
				'height' => (int) substr($this_tags_height[2][0], 1, -1),
				'classes' => $our_classes
			);
		}
	}

	/* BEGIN caption logic */
	$pattern = get_shortcode_regex();
	preg_match_all('/'. $pattern .'/s', $content, $shortcodes, PREG_SET_ORDER);

	$caption_ids = array();
	foreach ($shortcodes as $shortcode) {
		if (strpos($shortcode[0], 'caption') >= 0) {

			preg_match('/(id)=("[^"]*")/i', $shortcode[0], $this_captions_id);
			if ($this_captions_id && $this_captions_id[0]) {
				preg_match_all('!\d+!', $this_captions_id[0], $id);

				if ( preg_match( '#((?:<a [^>]+>\s*)?<img [^>]+>(?:\s*</a>)?)(.*)#is', $shortcode[0], $matches ) ) {
					$caption_ids[(int) $id[0][0]] = array(
						'caption' => substr(trim( $matches[2] ), 0, -10),
						'string_to_replace' => $shortcode[0]
					);
				}
			}
		}
	}

	foreach ($image_ids_in_order as $key => $image_details) {
		if (!array_key_exists($key, $caption_ids)) {
			$new_image = do_shortcode('[smart_image image_id="' . $key . '" class="' . $image_details['classes'] . '" width="'.$image_details["width"].'" height="'.$image_details["height"].'"][/smart_image]');
			$content = str_replace($image_details["string_to_replace"], $new_image, $content);
		} else {
			$new_image = do_shortcode('[smart_image image_id="' . $key . '" class="' . $image_details['classes'] . '" width="'.$image_details["width"].'" height="'.$image_details["height"].'"]' . $caption_ids[$key]["caption"] . '[/smart_image]');
			$content = str_replace($caption_ids[$key]["string_to_replace"], $new_image, $content);
		}
	}

	return $content;
}
add_filter('the_content','splitinfinities_swap_all_image_tags');
add_filter('acf_the_content','splitinfinities_swap_all_image_tags');


function my_mce_buttons_2( $buttons ) {
	array_unshift( $buttons, 'styleselect' );
	return $buttons;
}
add_filter( 'mce_buttons', 'my_mce_buttons_2' );

function my_tiny_mce_before_init( $mceInit ) {
	$style_formats = array(
		array(
			'title' => 'Fonts',
			'items' => array(
				array(
					'title' => 'Primary',
					'classes' => 'font-primary',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Secondary',
					'classes' => 'font-secondary',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
			)
		),
		array(
			'title' => 'Text Colors',
			'items' => array(
				array(
					'title' => 'Black',
					'classes' => 'black',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'White',
					'classes' => 'white',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Primary',
					'items' => array(
						array(
							'title' => 'Shade 0',
							'classes' => 'theme-base0',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 1',
							'classes' => 'theme-base1',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 2',
							'classes' => 'theme-base2',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 3',
							'classes' => 'theme-base3',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 4',
							'classes' => 'theme-base4',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 5',
							'classes' => 'theme-base5',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 6',
							'classes' => 'theme-base6',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 7',
							'classes' => 'theme-base7',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 8',
							'classes' => 'theme-base8',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 9',
							'classes' => 'theme-base9',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
					)
				),
				array(
					'title' => 'Complement',
					'items' => array(
						array(
							'title' => 'Shade 0',
							'classes' => 'theme-complement0',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 1',
							'classes' => 'theme-complement1',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 2',
							'classes' => 'theme-complement2',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 3',
							'classes' => 'theme-complement3',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 4',
							'classes' => 'theme-complement4',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 5',
							'classes' => 'theme-complement5',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 6',
							'classes' => 'theme-complement6',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 7',
							'classes' => 'theme-complement7',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 8',
							'classes' => 'theme-complement8',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
						array(
							'title' => 'Shade 9',
							'classes' => 'theme-complement9',
							'selector' => 'p,h1,h2,h3,h4,h5,h6',
							'wrapper' => true,
						),
					)
				),
			)
		),
		array(
			'title' => 'Text Shadow',
			'items' => array(
				array(
					'title' => 'Text shadow Top Left',
					'classes' => 'long-shadow-tl',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Text shadow Top Right',
					'classes' => 'long-shadow-tr',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Text shadow Bottom Left',
					'classes' => 'long-shadow-bl',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Text shadow Bottom Right',
					'classes' => 'long-shadow-br',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
			)
		),
		array(
			'title' => 'Type',
			'items' => array(
				array(
					'title' => 'Massive',
					'classes' => 'fs-massive',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Large',
					'classes' => 'fs-large',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Size 1',
					'classes' => 'fs1',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Size 2',
					'classes' => 'fs2',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Size 3',
					'classes' => 'fs3',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Size 4',
					'classes' => 'fs4',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Size 5',
					'classes' => 'fs5',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Size 6',
					'classes' => 'fs6',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Size 7',
					'classes' => 'fs7',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Size 8',
					'classes' => 'fs8',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
			)
		),
		array(
			'title' => 'Leading',
			'items' => array(
				array(
					'title' => 'Solid',
					'classes' => 'lh-solid',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Title',
					'classes' => 'lh-title',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Copy',
					'classes' => 'lh-copy',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
				array(
					'title' => 'Double',
					'classes' => 'lh-double',
					'selector' => 'p,h1,h2,h3,h4,h5,h6',
					'wrapper' => true,
				),
			)
		),
		array(
			'title' => 'Margin',
			'items' => array(
				array(
					'title' => 'Top',
					'items' => array(
						array(
							'title' => 'Step 1',
							'classes' => 'mt1',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 2',
							'classes' => 'mt2',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 3',
							'classes' => 'mt3',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 4',
							'classes' => 'mt4',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 5',
							'classes' => 'mt5',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 6',
							'classes' => 'mt6',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 7',
							'classes' => 'mt7',
							'selector' => '*',
							'wrapper' => true,
						),
					)
				),
				array(
					'title' => 'Left',
					'items' => array(
						array(
							'title' => 'Step 1',
							'classes' => 'ml1',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 2',
							'classes' => 'ml2',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 3',
							'classes' => 'ml3',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 4',
							'classes' => 'ml4',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 5',
							'classes' => 'ml5',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 6',
							'classes' => 'ml6',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 7',
							'classes' => 'ml7',
							'selector' => '*',
							'wrapper' => true,
						),
					)
				),
				array(
					'title' => 'Bottom',
					'items' => array(
						array(
							'title' => 'Step 1',
							'classes' => 'mb1',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 2',
							'classes' => 'mb2',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 3',
							'classes' => 'mb3',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 4',
							'classes' => 'mb4',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 5',
							'classes' => 'mb5',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 6',
							'classes' => 'mb6',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 7',
							'classes' => 'mb7',
							'selector' => '*',
							'wrapper' => true,
						),
					)
				),
				array(
					'title' => 'Right',
					'items' => array(
						array(
							'title' => 'Step 1',
							'classes' => 'mr1',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 2',
							'classes' => 'mr2',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 3',
							'classes' => 'mr3',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 4',
							'classes' => 'mr4',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 5',
							'classes' => 'mr5',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 6',
							'classes' => 'mr6',
							'selector' => '*',
							'wrapper' => true,
						),
						array(
							'title' => 'Step 7',
							'classes' => 'mr7',
							'selector' => '*',
							'wrapper' => true,
						),
					)
				),
			)
		),
	);

	$mceInit['style_formats'] = json_encode( $style_formats );

	return $mceInit;
}
add_filter( 'tiny_mce_before_init', 'my_tiny_mce_before_init' );


function my_theme_add_editor_styles() {
	add_editor_style( get_template_directory_uri() . '/assets/node_modules/@stellar-design/core/dist/stellar-core.css' );
	add_editor_style( get_template_directory_uri() . '/editor.css' );
}
add_action( 'admin_init', 'my_theme_add_editor_styles' );

function misha_allowed_block_types( $allowed_blocks ) {
	// $allowed_blocks = array(
	// 	'common/hero',
	// 	'common/content',
	// 	'common/carousel',
	// 	'common/statistics',
	// 	'common/page-list',
	// 	'common/calltoaction',
	// 	'common/testimonial'
	// );

	return $allowed_blocks;
}
add_filter( 'allowed_block_types', 'misha_allowed_block_types', 10, 2 );
