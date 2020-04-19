<?php
if( function_exists('acf_add_local_field_group') ):

  acf_add_local_field_group(array(
    'key' => 'group_5e9cb2fc55b98',
    'title' => 'Content Template: Latest Social Post',
    'fields' => array(
      array(
        'key' => 'field_5e9cb30e86c83',
        'label' => 'Platform',
        'name' => 'platform',
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
          'facebook' => 'Facebook',
          'twitter' => 'Twitter',
          'instagram' => 'Instagram',
          'vimeo' => 'Vimeo',
          'linkedin' => 'Linkedin',
        ),
        'allow_null' => 0,
        'default_value' => 'instagram',
        'layout' => 'horizontal',
        'return_format' => 'value',
      ),
      array(
        'key' => 'field_5e9cb3c07c265',
        'label' => 'Fallback Content',
        'name' => 'fallback_content',
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
        'key' => 'field_5e9cb33b86c84',
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