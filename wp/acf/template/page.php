<?php
if( function_exists('acf_add_local_field_group') ):

  acf_add_local_field_group(array(
    'key' => 'group_5ccb4916163f1',
    'title' => 'Page',
    'fields' => array(
      array(
        'key' => 'field_5ccb491e92b5e',
        'label' => 'Theme',
        'name' => 'theme',
        'type' => 'select',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'choices' => array(
          'theme-none' => 'None',
          'theme-gray' => 'Gray',
          'theme-red' => 'Red',
          'theme-orange' => 'Orange',
          'theme-yellow' => 'Yellow',
          'theme-lime' => 'Lime',
          'theme-green' => 'Green',
          'theme-teal' => 'Teal',
          'theme-cyan' => 'Cyan',
          'theme-blue' => 'Blue',
          'theme-indigo' => 'Indigo',
          'theme-violet' => 'Violet',
          'theme-fuschia' => 'Fuschia',
          'theme-pink' => 'Pink',
        ),
        'default_value' => array(
          0 => 'theme-red',
        ),
        'allow_null' => 0,
        'multiple' => 0,
        'ui' => 0,
        'return_format' => 'value',
        'ajax' => 0,
        'placeholder' => '',
      ),
      array(
        'key' => 'field_5ccb492792b5f',
        'label' => 'Complement',
        'name' => 'complement',
        'type' => 'select',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'choices' => array(
          'complement-none' => 'None',
          'complement-gray' => 'Gray',
          'complement-red' => 'Red',
          'complement-orange' => 'Orange',
          'complement-yellow' => 'Yellow',
          'complement-lime' => 'Lime',
          'complement-green' => 'Green',
          'complement-teal' => 'Teal',
          'complement-cyan' => 'Cyan',
          'complement-blue' => 'Blue',
          'complement-indigo' => 'Indigo',
          'complement-violet' => 'Violet',
          'complement-fuschia' => 'Fuschia',
          'complement-pink' => 'Pink',
        ),
        'default_value' => array(
          0 => 'complement-indigo',
        ),
        'allow_null' => 0,
        'multiple' => 0,
        'ui' => 0,
        'return_format' => 'value',
        'ajax' => 0,
        'placeholder' => '',
      ),
      array(
        'key' => 'field_5ccb4a784875d',
        'label' => 'Color Mode',
        'name' => 'color_mode',
        'type' => 'select',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'choices' => array(
          'none' => 'None',
          'dark-mode' => 'Dark',
          'light-mode' => 'Light',
          'plain-mode' => 'Plain',
        ),
        'default_value' => array(
          0 => 'none',
        ),
        'allow_null' => 0,
        'multiple' => 0,
        'ui' => 0,
        'return_format' => 'value',
        'ajax' => 0,
        'placeholder' => '',
      ),
    ),
    'location' => array(
      array(
        array(
          'param' => 'post_type',
          'operator' => '!=',
          'value' => 'post',
        ),
      ),
    ),
    'menu_order' => -99999999,
    'position' => 'side',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => true,
    'description' => '',
  ));
  
  endif;