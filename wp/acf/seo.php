<?php
if( function_exists('acf_add_local_field_group') ):

	acf_add_local_field_group(array (
		'key' => 'group_56fbff5f20f29',
		'title' => 'General SEO',
		'fields' => array (
			array (
				'key' => 'field_56fc02ba71eec',
				'label' => 'Meta tags',
				'name' => '',
				'type' => 'tab',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array (
					'width' => '',
					'class' => '',
					'id' => '',
					),
				'placement' => 'top',
				'endpoint' => 0,
				),
			array (
				'key' => 'field_56fbff7771ee8',
				'label' => 'Site Title',
				'name' => 'seo_page_title',
				'type' => 'text',
				'instructions' => 'You can customize how the title looks here. <br><br> • <b>{title}</b> for the name of the current page. <br> • <b>{site_name}</b> or <b>{site_title}</b> for the name of the blog, \'.get_bloginfo(\'name\').\'.',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array (
					'width' => '',
					'class' => '',
					'id' => '',
					),
				'default_value' => '{title} • {site_title}',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'maxlength' => '',
				'readonly' => 0,
				'disabled' => 0,
				),
			array (
				'key' => 'field_56fc00a171ee9',
				'label' => 'Site Description',
				'name' => 'seo_page_description',
				'type' => 'text',
				'instructions' => 'Describe what your company does. This text will show up on Google search results. ',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array (
					'width' => '',
					'class' => '',
					'id' => '',
					),
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'maxlength' => '',
				'readonly' => 0,
				'disabled' => 0,
				),
			array (
				'key' => 'field_56fc01b971eea',
				'label' => 'Site Keywords',
				'name' => 'seo_page_keywords',
				'type' => 'repeater',
				'instructions' => 'Add general and succinct keywords about this site. These will help google understand what this site is about, and will give you a higher rank on Google. ',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array (
					'width' => '',
					'class' => '',
					'id' => '',
					),
				'collapsed' => 'field_56fc01e471eeb',
				'min' => 1,
				'max' => '',
				'layout' => 'table',
				'button_label' => 'Add Keyword',
				'sub_fields' => array (
					array (
						'key' => 'field_56fc01e471eeb',
						'label' => 'Keyword',
						'name' => 'keyword',
						'type' => 'text',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array (
							'width' => '',
							'class' => '',
							'id' => '',
							),
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'maxlength' => '',
						'readonly' => 0,
						'disabled' => 0,
						),
					),
				),
			array (
				'key' => 'field_56fc02c671eed',
				'label' => 'Schema and Microdata',
				'name' => '',
				'type' => 'tab',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array (
					'width' => '',
					'class' => '',
					'id' => '',
					),
				'placement' => 'top',
				'endpoint' => 0,
				),
			array (
				'key' => 'field_56fc02f040463',
				'label' => 'Coming Soon',
				'name' => '',
				'type' => 'message',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array (
					'width' => '',
					'class' => '',
					'id' => '',
					),
				'message' => 'More setup stuff coming soon.',
				'new_lines' => 'wpautop',
				'esc_html' => 0,
				),
			array (
				'key' => 'field_56fc031b40464',
				'label' => 'Analytics',
				'name' => '',
				'type' => 'tab',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array (
					'width' => '',
					'class' => '',
					'id' => '',
					),
				'placement' => 'top',
				'endpoint' => 0,
				),
			array (
				'key' => 'field_56fc033040465',
				'label' => 'Google Analytics UA Code',
				'name' => 'seo_google_analytics_ua_code',
				'type' => 'text',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array (
					'width' => '',
					'class' => '',
					'id' => '',
					),
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'maxlength' => '',
				'readonly' => 0,
				'disabled' => 0,
				),
			),
'location' => array (
	array (
		array (
			'param' => 'options_page',
			'operator' => '==',
			'value' => 'acf-options-seo',
			),
		),
	),
'menu_order' => 0,
'position' => 'acf_after_title',
'style' => 'seamless',
'label_placement' => 'top',
'instruction_placement' => 'label',
'hide_on_screen' => array (
	0 => 'permalink',
	1 => 'the_content',
	2 => 'excerpt',
	3 => 'custom_fields',
	4 => 'discussion',
	5 => 'comments',
	6 => 'revisions',
	7 => 'slug',
	8 => 'author',
	9 => 'format',
	10 => 'page_attributes',
	11 => 'featured_image',
	12 => 'categories',
	13 => 'tags',
	14 => 'send-trackbacks',
	),
'active' => 1,
'description' => 'This sets up the entire site\'s SEO - such as Google analytics, page titles, and other SEO features.',
));

endif;
