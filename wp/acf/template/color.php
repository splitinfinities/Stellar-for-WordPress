<?php 
if( function_exists('acf_add_local_field_group') ):

  acf_add_local_field_group(array(
    'key' => 'group_5e9c9f0a40c5b',
    'title' => 'Template: Color Selector',
    'fields' => array(
      array(
        'key' => 'field_5e9c9f10459d8',
        'label' => 'Color',
        'name' => 'color',
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
          'bg-transparent' => 'Transparent',
          'bg-white' => 'White',
          'bg-black' => 'Black',
          'bg-black-alt' => 'Black Alt',
          'bg-theme-base0' => 'Theme\'s White',
          'bg-theme-base1' => 'Theme\'s Lightest',
          'bg-theme-base2' => 'Theme\'s Lighter',
          'bg-theme-base3' => 'Theme\'s Light',
          'bg-theme-base4' => 'Theme\'s Medium Light',
          'bg-theme-base5' => 'Theme\'s Base',
          'bg-theme-base6' => 'Theme\'s Medium Dark',
          'bg-theme-base7' => 'Theme\'s Dark',
          'bg-theme-base8' => 'Theme\'s Darker',
          'bg-theme-base9' => 'Theme\'s Darkest',
          'bg-theme-complement0' => 'Complement\'s White',
          'bg-theme-complement1' => 'Complement\'s Lightest',
          'bg-theme-complement2' => 'Complement\'s Lighter',
          'bg-theme-complement3' => 'Complement\'s Light',
          'bg-theme-complement4' => 'Complement\'s Medium Light',
          'bg-theme-complement5' => 'Complement\'s Base',
          'bg-theme-complement6' => 'Complement\'s Medium Dark',
          'bg-theme-complement7' => 'Complement\'s Dark',
          'bg-theme-complement8' => 'Complement\'s Darker',
          'bg-theme-complement9' => 'Complement\'s Darkest',
        ),
        'default_value' => array(
          0 => 'bg-transparent',
        ),
        'allow_null' => 0,
        'multiple' => 0,
        'ui' => 1,
        'ajax' => 0,
        'return_format' => 'value',
        'placeholder' => '',
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