<?php
if( function_exists('acf_add_local_field_group') ):

  acf_add_local_field_group(array(
    'key' => 'group_5e9ca49aec6eb',
    'title' => 'Content Template: Interview',
    'fields' => array(
      array(
        'key' => 'field_5e9ca64cb484c',
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
          'audio' => 'audio',
          'video' => 'video',
        ),
        'allow_null' => 0,
        'default_value' => '',
        'layout' => 'horizontal',
        'return_format' => 'value',
      ),
      array(
        'key' => 'field_5e9ca4bd2a2d6',
        'label' => 'Background',
        'name' => 'nested',
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
          0 => 'group_5cc7d0fa7f0d4',
        ),
        'display' => 'seamless',
        'layout' => 'block',
        'prefix_label' => 1,
        'prefix_name' => 1,
      ),
      array(
        'key' => 'field_5e9ca4e82a2d7',
        'label' => 'Lines',
        'name' => 'lines',
        'type' => 'repeater',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'collapsed' => 'field_5e9ca5222a2d8',
        'min' => 0,
        'max' => 0,
        'layout' => 'block',
        'button_label' => '',
        'sub_fields' => array(
          array(
            'key' => 'field_5e9ca5222a2d8',
            'label' => 'Primary',
            'name' => 'primary',
            'type' => 'text',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
              'width' => '',
              'class' => '',
              'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '',
            'prepend' => '',
            'append' => '',
            'maxlength' => '',
          ),
          array(
            'key' => 'field_5e9ca52b2a2d9',
            'label' => 'Supplemental',
            'name' => 'supplemental',
            'type' => 'text',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
              'width' => '',
              'class' => '',
              'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '',
            'prepend' => '',
            'append' => '',
            'maxlength' => '',
          ),
          array(
            'key' => 'field_5e9ca5372a2da',
            'label' => 'Start Time (In Milliseconds)',
            'name' => 'start_time',
            'type' => 'number',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
              'width' => '50',
              'class' => '',
              'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '',
            'prepend' => '',
            'append' => '',
            'min' => '',
            'max' => '',
            'step' => '',
          ),
          array(
            'key' => 'field_5e9ca54e2a2db',
            'label' => 'End Time (In Milliseconds)',
            'name' => 'end_time',
            'type' => 'number',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
              'width' => '50',
              'class' => '',
              'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '',
            'prepend' => '',
            'append' => '',
            'min' => '',
            'max' => '',
            'step' => '',
          ),
        ),
      ),
      array(
        'key' => 'field_5e9ca6080d52d',
        'label' => 'File',
        'name' => 'file',
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
        'mime_types' => '',
      ),
      array(
        'key' => 'field_5e9ca6e89ba3b',
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