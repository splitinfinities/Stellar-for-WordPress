<?php

/**
 * Builds the Smart Image shortcode output.
 *
 * Allows a plugin to replace the content that would otherwise be returned. The
 * filter is 'img_smart_image_shortcode' and passes an empty string, the attr
 * parameter and the content parameter values.
 *
 * The supported attributes for the shortcode are 'id', 'align', 'width', and
 * 'caption'.
 *
 * @since 2.6.0
 *
 * @param array  $attr {
 *     Attributes of the caption shortcode.
 *
 *     @type string $id      ID of the div element for the caption.
 *     @type string $align   Class name that aligns the caption. Default 'alignnone'. Accepts 'alignleft',
 *                           'aligncenter', alignright', 'alignnone'.
 *     @type int    $width   The width of the caption, in pixels.
 *     @type string $caption The caption text.
 *     @type string $class   Additional class name(s) added to the caption container.
 * }
 * @param string $content Shortcode content.
 * @return string HTML content to display the caption.
 */
function img_smart_image_shortcode( $attr, $content = null ) {

	$image_meta = wp_get_attachment_metadata( $attr['image_id'] );

	// if the image hasn't been uploaded through the dashboard,
	if ($image_meta === false) {
		echo 'Looks like image ' . $attr['image_id'] . ' hasn&rsquo;t been uploaded through the dashboard.';
	} else {
		// gets the images
		$image_large = wp_get_attachment_image_src( $attr['image_id'], 'full');
		$image_medium = wp_get_attachment_image_src( $attr['image_id'], 'medium-hero-png');
		$image_small = wp_get_attachment_image_src( $attr['image_id'], 'small-hero-png');
		$placeholder = wp_get_attachment_image_src( $attr['image_id'], 'apple-square-76');

		// Sets up the images array
		$images = array(
			'(min-width:1023px), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)' => make_href_root_relative($image_large[0]),
			'(min-width:1023px)' => make_href_root_relative($image_large[0]),
			'(min-width:640px), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)' => make_href_root_relative($image_large[0]),
			'(min-width:640px)' => make_href_root_relative($image_medium[0]),
			'(min-width:0px), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)' => make_href_root_relative($image_medium[0]),
			'(min-width:0px)' => make_href_root_relative($image_small[0]),
		);

		$attr["width"] = $image_meta["width"];
		$attr["height"] = $image_meta["height"];

		if (strpos($image_large[0], '@2x') !== false) {
			$attr["width"] = ($image_meta["width"] / 2);
			$attr["height"] = ($image_meta["height"] / 2);
		}

		if (strpos($image_large[0], '@3x') !== false) {
			$attr["width"] = ($image_meta["width"] / 3);
			$attr["height"] = ($image_meta["height"] / 3);
		}

		$attr["class"] = $attr["class"] . ' db';
		$attr["intrinsicsize"] = $attr["width"] . " x " . $attr["height"];

		if (get_field('transparent', $attr['image_id'])) {
			$attr['bg'] = "transparent";
		} else if (get_field('image_preload_color', $attr['image_id'])) {
			$attr['bg'] = get_field('image_preload_color', $attr['image_id']);
		}

		if ($attr["priority"]) {
			$arrContextOptions=array(
				"ssl"=>array(
					"verify_peer"=>false,
					"verify_peer_name"=>false,
				),
			);  
			$file = file_get_contents($placeholder[0], false, stream_context_create($arrContextOptions));
			$data = base64_encode($file); 
			$poster = "data:image/png;base64," . $data;
			$style = "background-image: url($poster) 50% 50% / cover;";
			$attr["style"] = ($attr["style"]) ? $attr["style"] . $style : $style;
		} else {
			$poster = make_href_root_relative($placeholder[0]);
		}

		$nozoom = (in_array('nozoom', $attr) || strpos( $attr["class"], 'nozoom') !== false || get_field('disable_zoom', $attr['image_id'])) ? 'nozoom' : '';

		$block = in_array('block', $attr) ? 'block' : '';
	}

	$is_360 = get_field('image_360', $attr['image_id']);

	if ($is_360) {
		$final_image = "<stellar-360-image src='" . make_href_root_relative($image_large[0])  . "'></stellar-360-image>";
	} else {
		$final_image = "<stellar-image " . array_to_html_attributes($attr) . ' ' . $nozoom . ' ' . $block . ' poster=' . $poster . '>';
			foreach ($images as $media => $src) {
				$final_image .= '<source media="' . $media . '" srcset="' . $src . '" />';
			}
		$final_image .= "</stellar-image>";
	}



	return $final_image;
}
add_shortcode('smart_image', 'img_smart_image_shortcode');
