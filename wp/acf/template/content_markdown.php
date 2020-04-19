<?php 

if( function_exists('acf_add_local_field_group') ):

  acf_add_local_field_group(array(
    'key' => 'group_5e9ca219d11fb',
    'title' => 'Content Template: Markdown',
    'fields' => array(
      array(
        'key' => 'field_5e9ca287f1bce',
        'label' => 'Source',
        'name' => 'source',
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
          'link' => 'Link to a file',
          'file' => 'Upload a File',
          'raw' => 'Raw',
        ),
        'allow_null' => 0,
        'default_value' => 'file',
        'layout' => 'horizontal',
        'return_format' => 'value',
      ),
      array(
        'key' => 'field_5e9ca229f1bca',
        'label' => 'Copy',
        'name' => 'copy',
        'type' => 'textarea',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => array(
          array(
            array(
              'field' => 'field_5e9ca287f1bce',
              'operator' => '==',
              'value' => 'raw',
            ),
          ),
        ),
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'default_value' => '# Title
  
  ## Subhead
  
  Awesome!',
        'placeholder' => '',
        'maxlength' => '',
        'rows' => '',
        'new_lines' => '',
      ),
      array(
        'key' => 'field_5e9ca249f1bcb',
        'label' => 'Link',
        'name' => 'url',
        'type' => 'url',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => array(
          array(
            array(
              'field' => 'field_5e9ca287f1bce',
              'operator' => '==',
              'value' => 'link',
            ),
          ),
        ),
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'default_value' => '',
        'placeholder' => '',
      ),
      array(
        'key' => 'field_5e9ca255f1bcc',
        'label' => 'File',
        'name' => 'file',
        'type' => 'file',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => array(
          array(
            array(
              'field' => 'field_5e9ca287f1bce',
              'operator' => '==',
              'value' => 'file',
            ),
          ),
        ),
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
        'key' => 'field_5e9ca267f1bcd',
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
        'default_value' => '',
        'layout' => 'horizontal',
        'return_format' => 'value',
      ),
      array(
        'key' => 'field_5e9ca308fdcae',
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