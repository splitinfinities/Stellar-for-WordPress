<?php 

if( function_exists('acf_add_local_field_group') ):

  acf_add_local_field_group(array(
    'key' => 'group_5df2ea4ca0833',
    'title' => 'Tab Block',
    'fields' => array(
      array(
        'key' => 'field_5df2ea6216613',
        'label' => 'Content',
        'name' => '',
        'type' => 'tab',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'placement' => 'left',
        'endpoint' => 0,
      ),
      array(
        'key' => 'field_5df2ea7116614',
        'label' => 'Tabs',
        'name' => 'tabs',
        'type' => 'repeater',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'collapsed' => 'field_5df2ea8216615',
        'min' => 1,
        'max' => 0,
        'layout' => 'block',
        'button_label' => 'Add Tab',
        'sub_fields' => array(
          array(
            'key' => 'field_5df2eb8c16619',
            'label' => 'Config',
            'name' => '',
            'type' => 'tab',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
              'width' => '',
              'class' => '',
              'id' => '',
            ),
            'placement' => 'top',
            'endpoint' => 1,
          ),
          array(
            'key' => 'field_5df2ea8216615',
            'label' => 'Title',
            'name' => 'title',
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
            'key' => 'field_5df3cfd04e23c',
            'label' => 'Tab Content',
            'name' => 'tab_content',
            'type' => 'flexible_content',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
              'width' => '',
              'class' => '',
              'id' => '',
            ),
            'layouts' => array(
              'layout_5df3cfe41b2fe' => array(
                'key' => 'layout_5df3cfe41b2fe',
                'name' => 'hero',
                'label' => 'Hero',
                'display' => 'block',
                'sub_fields' => array(
                  array(
                    'key' => 'field_5df3d0084e240',
                    'label' => 'Content',
                    'name' => 'content',
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
                      0 => 'group_5cc8cc4561bb4',
                    ),
                    'display' => 'seamless',
                    'layout' => 'block',
                    'prefix_label' => 0,
                    'prefix_name' => 0,
                  ),
                ),
                'min' => '',
                'max' => '',
              ),
              'layout_5df3cff94e23d' => array(
                'key' => 'layout_5df3cff94e23d',
                'name' => 'grid',
                'label' => 'Grid',
                'display' => 'block',
                'sub_fields' => array(
                  array(
                    'key' => 'field_5df3d01e4e241',
                    'label' => 'Content',
                    'name' => 'content',
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
                      0 => 'group_5ccb5c1f22971',
                    ),
                    'display' => 'seamless',
                    'layout' => 'block',
                    'prefix_label' => 0,
                    'prefix_name' => 0,
                  ),
                ),
                'min' => '',
                'max' => '',
              ),
              'layout_5df3cfff4e23e' => array(
                'key' => 'layout_5df3cfff4e23e',
                'name' => 'content',
                'label' => 'Content',
                'display' => 'block',
                'sub_fields' => array(
                  array(
                    'key' => 'field_5df3d05a4e242',
                    'label' => 'Content',
                    'name' => 'content',
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
                      0 => 'group_5cc53d09eeb1d',
                    ),
                    'display' => 'seamless',
                    'layout' => 'block',
                    'prefix_label' => 0,
                    'prefix_name' => 0,
                  ),
                ),
                'min' => '',
                'max' => '',
              ),
              'layout_5df3d0024e23f' => array(
                'key' => 'layout_5df3d0024e23f',
                'name' => 'mosaic',
                'label' => 'mosaic',
                'display' => 'block',
                'sub_fields' => array(
                  array(
                    'key' => 'field_5df3d0a54e243',
                    'label' => 'Content',
                    'name' => 'content',
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
                      0 => 'group_5defda9a73b76',
                    ),
                    'display' => 'seamless',
                    'layout' => 'block',
                    'prefix_label' => 0,
                    'prefix_name' => 0,
                  ),
                ),
                'min' => '',
                'max' => '',
              ),
              'layout_5e0ae027ef0f8' => array(
                'key' => 'layout_5e0ae027ef0f8',
                'name' => 'pagelist',
                'label' => 'Pagelist',
                'display' => 'block',
                'sub_fields' => array(
                  array(
                    'key' => 'field_5e0ae030ef0f9',
                    'label' => 'Content',
                    'name' => 'content',
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
                      0 => 'group_5df3feb66e711',
                    ),
                    'display' => 'seamless',
                    'layout' => 'block',
                    'prefix_label' => 0,
                    'prefix_name' => 0,
                  ),
                ),
                'min' => '',
                'max' => '',
              ),
            ),
            'button_label' => 'Add Section',
            'min' => '',
            'max' => '',
          ),
        ),
      ),
      array(
        'key' => 'field_5df2ea5616612',
        'label' => 'Layout',
        'name' => '',
        'type' => 'tab',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'placement' => 'left',
        'endpoint' => 0,
      ),
      array(
        'key' => 'field_5df3cbee9b25f',
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
          0 => 'field_5ccb53a529c5e',
          1 => 'field_5ccb53a529c8b',
          2 => 'field_5ccb53a529cb7',
          3 => 'field_5ccb53a529ce1',
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
          'value' => 'acf/tabs',
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