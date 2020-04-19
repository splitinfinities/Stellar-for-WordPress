<?php 

if( function_exists('acf_add_local_field_group') ):

  acf_add_local_field_group(array(
    'key' => 'group_5df003ceb20b9',
    'title' => 'Spacer Block',
    'fields' => array(
      array(
        'key' => 'field_5df003d40127f',
        'label' => 'Size',
        'name' => 'spacer_size',
        'type' => 'range',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'default_value' => '',
        'min' => 0,
        'max' => 6,
        'step' => 1,
        'prepend' => '',
        'append' => '',
      ),
      array(
        'key' => 'field_5df003e901280',
        'label' => 'Layout',
        'name' => 'layout',
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
          0 => 'group_5ccb53a527811',
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
          'param' => 'block',
          'operator' => '==',
          'value' => 'acf/spacer',
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