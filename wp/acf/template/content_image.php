<?php 
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_5e9ca7fb8ee32',
	'title' => 'Content Template: Image / 360 Image',
	'fields' => array(
		array(
			'key' => 'field_5e9ca806c8907',
			'label' => 'Type',
			'name' => 'type',
			'type' => 'button_group',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'choices' => array(
				'picture' => 'Picture',
				'background' => 'Background',
			),
			'allow_null' => 0,
			'default_value' => 'picture',
			'layout' => 'horizontal',
			'return_format' => 'value',
		),
		array(
			'key' => 'field_5e9ca823c8908',
			'label' => 'Zoom',
			'name' => 'zoom',
			'type' => 'true_false',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'message' => '',
			'default_value' => 1,
			'ui' => 0,
			'ui_on_text' => '',
			'ui_off_text' => '',
		),
		array(
			'key' => 'field_5e9ca83ac8909',
			'label' => 'Image',
			'name' => 'image',
			'type' => 'image',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'return_format' => 'id',
			'preview_size' => 'small-hero-png',
			'library' => 'all',
			'min_width' => '',
			'min_height' => '',
			'min_size' => '',
			'max_width' => '',
			'max_height' => '',
			'max_size' => '',
			'mime_types' => '',
		),
		array(
			'key' => 'field_5e9ca85ac890a',
			'label' => 'Shared',
			'name' => 'shared',
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
				0 => 'group_5e9c9ed90878b',
			),
			'display' => 'seamless',
			'layout' => 'block',
			'prefix_label' => 0,
			'prefix_name' => 0,
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'current_user',
				'operator' => '==',
				'value' => 'viewing_front',
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