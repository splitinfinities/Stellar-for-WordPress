<?php 
if( function_exists('acf_add_local_field_group') ):

	$layouts = array();

	if (in_array("wysiwyg", get_field('content_types', 'options'))):
		$layouts['layout_5cc7d1218c0d7'] = array(
			'key' => 'layout_5cc7d1218c0d7',
			'name' => 'wysiwyg',
			'label' => 'WYSIWYG',
			'display' => 'block',
			'sub_fields' => array(
				array(
					'key' => 'field_5e9ca0bf7ed96',
					'label' => 'Content',
					'name' => 'content',
					'type' => 'clone',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'clone' => array(
						0 => 'group_5e9c9e4fecfdb',
					),
					'display' => 'seamless',
					'layout' => 'block',
					'prefix_label' => 0,
					'prefix_name' => 0,
				),
			),
			'min' => '',
			'max' => '',
		);
	endif;

	if (in_array("markdown", get_field('content_types', 'options'))):
		$layouts['layout_5cd7c124a63db'] = array(
			'key' => 'layout_5cd7c124a63db',
			'name' => 'markdown',
			'label' => 'Markdown',
			'display' => 'block',
			'sub_fields' => array(
				array(
					'key' => 'field_5e9ca33a6b21d',
					'label' => 'Content',
					'name' => 'content',
					'type' => 'clone',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'clone' => array(
						0 => 'group_5e9ca219d11fb',
					),
					'display' => 'seamless',
					'layout' => 'block',
					'prefix_label' => 0,
					'prefix_name' => 0,
				),
			),
			'min' => '',
			'max' => '',
		);
	endif;

	if (in_array("interview", get_field('content_types', 'options'))):
		$layouts['layout_5cc7d27a91b12'] = array(
			'key' => 'layout_5cc7d27a91b12',
			'name' => 'interview',
			'label' => 'Interview',
			'display' => 'block',
			'sub_fields' => array(
				array(
					'key' => 'field_5e9ca7761bcf1',
					'label' => 'Content',
					'name' => 'content',
					'type' => 'clone',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'clone' => array(
						0 => 'group_5e9ca49aec6eb',
					),
					'display' => 'seamless',
					'layout' => 'block',
					'prefix_label' => 0,
					'prefix_name' => 0,
				),
			),
			'min' => '',
			'max' => '',
		);
	endif;
	
	if (in_array("image", get_field('content_types', 'options'))):
		$layouts['layout_5cc7d28a91b13'] = array(
			'key' => 'layout_5cc7d28a91b13',
			'name' => 'image',
			'label' => 'Image / 360 Image',
			'display' => 'block',
			'sub_fields' => array(
				array(
					'key' => 'field_5e9ca87ec4ebc',
					'label' => 'Content',
					'name' => 'content',
					'type' => 'clone',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'clone' => array(
						0 => 'group_5e9ca7fb8ee32',
					),
					'display' => 'seamless',
					'layout' => 'block',
					'prefix_label' => 0,
					'prefix_name' => 0,
				),
			),
			'min' => '',
			'max' => '',
		);
	endif;
	
	if (in_array("video", get_field('content_types', 'options'))):
		$layouts['layout_5cc7d29c91b14'] = array(
			'key' => 'layout_5cc7d29c91b14',
			'name' => 'video',
			'label' => 'Video / 360 Video',
			'display' => 'block',
			'sub_fields' => array(
				array(
					'key' => 'field_5e9ca957fb4ae',
					'label' => 'Content',
					'name' => 'content',
					'type' => 'clone',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'clone' => array(
						0 => 'group_5e9ca8d5c32f5',
					),
					'display' => 'seamless',
					'layout' => 'block',
					'prefix_label' => 0,
					'prefix_name' => 0,
				),
			),
			'min' => '',
			'max' => '',
		);
	endif;
	
	if (in_array("song", get_field('content_types', 'options'))):
		$layouts['layout_5cc7d2af91b16'] = array(
			'key' => 'layout_5cc7d2af91b16',
			'name' => 'song',
			'label' => 'Song',
			'display' => 'block',
			'sub_fields' => array(
				array(
					'key' => 'field_5e9caad42362f',
					'label' => 'Content',
					'name' => 'content',
					'type' => 'clone',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'clone' => array(
						0 => 'group_5e9caa6de7a43',
					),
					'display' => 'seamless',
					'layout' => 'block',
					'prefix_label' => 0,
					'prefix_name' => 0,
				),
			),
			'min' => '',
			'max' => '',
		);
	endif;
	
	if (in_array("playlist", get_field('content_types', 'options'))):
		$layouts['layout_5cc7d2bb91b17'] = array(
			'key' => 'layout_5cc7d2bb91b17',
			'name' => 'playlist',
			'label' => 'Playlist',
			'display' => 'block',
			'sub_fields' => array(
				array(
					'key' => 'field_5e9cab5b23630',
					'label' => 'Content',
					'name' => 'content',
					'type' => 'clone',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'clone' => array(
						0 => 'group_5e9caaf3d652c',
					),
					'display' => 'seamless',
					'layout' => 'block',
					'prefix_label' => 0,
					'prefix_name' => 0,
				),
			),
			'min' => '',
			'max' => '',
		);
	endif;
	
	if (in_array("carousel", get_field('content_types', 'options'))):
		$layouts['layout_5cc7d2c791b18'] = array(
			'key' => 'layout_5cc7d2c791b18',
			'name' => 'carousel',
			'label' => 'Carousel',
			'display' => 'block',
			'sub_fields' => array(
				array(
					'key' => 'field_5e9caf299046b',
					'label' => 'Content',
					'name' => 'content',
					'type' => 'clone',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'clone' => array(
						0 => 'group_5e9cab8e3272c',
					),
					'display' => 'seamless',
					'layout' => 'block',
					'prefix_label' => 0,
					'prefix_name' => 0,
				),
			),
			'min' => '',
			'max' => '',
		);
	endif;
	
	if (in_array("chart", get_field('content_types', 'options'))):
		$layouts['layout_5cc7d2d191b19'] =  array(
			'key' => 'layout_5cc7d2d191b19',
			'name' => 'chart',
			'label' => 'Chart',
			'display' => 'block',
			'sub_fields' => array(
				array(
					'key' => 'field_5e9cb0df0c3f8',
					'label' => 'Content',
					'name' => 'content',
					'type' => 'clone',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'clone' => array(
						0 => 'group_5e9cb096ccddd',
					),
					'display' => 'seamless',
					'layout' => 'block',
					'prefix_label' => 0,
					'prefix_name' => 0,
				),
			),
			'min' => '',
			'max' => '',
		);
	endif;
	
	if (in_array("code_sample", get_field('content_types', 'options'))):
		$layouts['layout_5cc8a2e6d1b92'] = array(
			'key' => 'layout_5cc8a2e6d1b92',
			'name' => 'code_sample',
			'label' => 'Code Sample',
			'display' => 'block',
			'sub_fields' => array(
				array(
					'key' => 'field_5e9cb1a343854',
					'label' => 'Content',
					'name' => 'content',
					'type' => 'clone',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'clone' => array(
						0 => 'group_5e9cb11767925',
					),
					'display' => 'seamless',
					'layout' => 'block',
					'prefix_label' => 0,
					'prefix_name' => 0,
				),
			),
			'min' => '',
			'max' => '',
		);
	endif;
	
	if (in_array("map", get_field('content_types', 'options'))):
		$layouts['layout_5e125d207607e'] = array(
			'key' => 'layout_5e125d207607e',
			'name' => 'map',
			'label' => 'Map',
			'display' => 'block',
			'sub_fields' => array(
				array(
					'key' => 'field_5e9cb2cb43855',
					'label' => 'Content',
					'name' => 'content',
					'type' => 'clone',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'clone' => array(
						0 => 'group_5e9cb1d264ffd',
					),
					'display' => 'seamless',
					'layout' => 'block',
					'prefix_label' => 0,
					'prefix_name' => 0,
				),
			),
			'min' => '',
			'max' => '',
		);
	endif;
	
	if (in_array("latest_social_post", get_field('content_types', 'options'))):
		$layouts['layout_5e1fd3f968a1f'] = array(
			'key' => 'layout_5e1fd3f968a1f',
			'name' => 'latest_social_post',
			'label' => 'Latest Social Post',
			'display' => 'block',
			'sub_fields' => array(
				array(
					'key' => 'field_5e9cb38b43856',
					'label' => 'Content',
					'name' => 'content',
					'type' => 'clone',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'clone' => array(
						0 => 'group_5e9cb2fc55b98',
					),
					'display' => 'seamless',
					'layout' => 'block',
					'prefix_label' => 0,
					'prefix_name' => 0,
				),
			),
			'min' => '',
			'max' => '',
		);
	endif;


	acf_add_local_field_group(array(
		'key' => 'group_5cc7d0fa7f0d4',
		'title' => 'Content Template',
		'fields' => array(
			array(
				'key' => 'field_5cc7d115bc7b1',
				'label' => 'Content',
				'name' => 'the_content',
				'type' => 'flexible_content',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'layouts' => $layouts,
				'button_label' => 'Add more content',
				'min' => '',
				'max' => '',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'post',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
	));

endif;