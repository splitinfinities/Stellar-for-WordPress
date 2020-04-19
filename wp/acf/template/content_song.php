<?php
if( function_exists('acf_add_local_field_group') ):

  acf_add_local_field_group(array(
    'key' => 'group_5e9caa6de7a43',
    'title' => 'Content Template: Song',
    'fields' => array(
      array(
        'key' => 'field_5e9caa7da9cc9',
        'label' => 'File',
        'name' => 'mp3',
        'type' => 'file',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'return_format' => 'url',
        'library' => 'all',
        'min_size' => '',
        'max_size' => '',
        'mime_types' => 'mp3',
      ),
      array(
        'key' => 'field_5e9caab0a9cca',
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