<?php
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_5e9c9e4fecfdb',
	'title' => 'Content Template: WYSIWYG',
	'fields' => array(
		array(
			'key' => 'field_5e9c9e6bc8603',
			'label' => 'Copy',
			'name' => 'copy',
			'type' => 'wysiwyg',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'tabs' => 'all',
			'toolbar' => 'full',
			'media_upload' => 1,
			'delay' => 0,
		),
		array(
			'key' => 'field_5e9c9e79c8604',
			'label' => 'Align',
			'name' => 'align',
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
				'left' => 'Left',
				'center' => 'Center',
				'right' => 'Right',
			),
			'allow_null' => 0,
			'default_value' => 'left',
			'layout' => 'horizontal',
			'return_format' => 'value',
		),
		array(
			'key' => 'field_5e9ca03216461',
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