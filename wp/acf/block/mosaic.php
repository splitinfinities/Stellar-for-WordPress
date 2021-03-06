<?php
if( function_exists('acf_add_local_field_group') ):

  acf_add_local_field_group(array(
    'key' => 'group_5defda9a73b76',
    'title' => 'Mosaic Block',
    'fields' => array(
      array(
        'key' => 'field_5deff0ca6f2dc',
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
        'key' => 'field_5defdc6f027da',
        'label' => 'Layouts',
        'name' => 'layouts',
        'type' => 'repeater',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'collapsed' => 'field_5defdc98027db',
        'min' => 0,
        'max' => 0,
        'layout' => 'block',
        'button_label' => '',
        'sub_fields' => array(
          array(
            'key' => 'field_5defdc98027db',
            'label' => 'Layout Type',
            'name' => 'layout_type',
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
              'variant-one' => '<img src="/wp-content/themes/gabriella-parsons/blocks/mosaic/variant-one.png" />',
              'variant-two' => '<img src="/wp-content/themes/gabriella-parsons/blocks/mosaic/variant-two.png" />',
              'variant-three' => '<img src="/wp-content/themes/gabriella-parsons/blocks/mosaic/variant-three.png" />',
              'variant-four' => '<img src="/wp-content/themes/gabriella-parsons/blocks/mosaic/variant-four.png" />',
              'variant-five' => '<img src="/wp-content/themes/gabriella-parsons/blocks/mosaic/variant-five.png" />',
              'variant-six' => '<img src="/wp-content/themes/gabriella-parsons/blocks/mosaic/variant-six.png" />',
              'variant-seven' => '<img src="/wp-content/themes/gabriella-parsons/blocks/mosaic/variant-seven.png" />',
              'variant-eight' => '<img src="/wp-content/themes/gabriella-parsons/blocks/mosaic/variant-eight.png" />',
              'variant-nine' => '<img src="/wp-content/themes/gabriella-parsons/blocks/mosaic/variant-nine.png" />',
              'variant-ten' => '<img src="/wp-content/themes/gabriella-parsons/blocks/mosaic/variant-ten.png" />',
              'variant-eleven' => '<img src="/wp-content/themes/gabriella-parsons/blocks/mosaic/variant-eleven.png" />',
            ),
            'allow_null' => 0,
            'default_value' => 'variant-one',
            'layout' => 'horizontal',
            'return_format' => 'value',
          ),
          array(
            'key' => 'field_5defe6c0a6ac3',
            'label' => 'Flipped',
            'name' => 'flipped',
            'type' => 'true_false',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
              'width' => '30',
              'class' => '',
              'id' => '',
            ),
            'message' => '',
            'default_value' => 0,
            'ui' => 0,
            'ui_on_text' => '',
            'ui_off_text' => '',
          ),
          array(
            'key' => 'field_5df00750310ae',
            'label' => 'Flipped sizes',
            'name' => 'flipped_sizes',
            'type' => 'true_false',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
              'width' => '30',
              'class' => '',
              'id' => '',
            ),
            'message' => '',
            'default_value' => 0,
            'ui' => 0,
            'ui_on_text' => '',
            'ui_off_text' => '',
          ),
          array(
            'key' => 'field_5df5480848792',
            'label' => 'Constrained Height',
            'name' => 'constrained_height',
            'type' => 'true_false',
            'instructions' => 'If unchecked, content will dictate the height of sections. If all you have in this mosaic are images, leave this checked.',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
              'width' => '40',
              'class' => '',
              'id' => '',
            ),
            'message' => '',
            'default_value' => 1,
            'ui' => 0,
            'ui_on_text' => '',
            'ui_off_text' => '',
          ),
          array(
            'key' => 'field_5defe75556c73',
            'label' => 'Content',
            'name' => 'content',
            'type' => 'clone',
            'instructions' => '',
            'required' => 1,
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
            'prefix_label' => 0,
            'prefix_name' => 0,
          ),
        ),
      ),
      array(
        'key' => 'field_5deff0b86f2db',
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
        'key' => 'field_5deff0d86f2dd',
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
      array(
        'key' => 'field_5df009cf795fb',
        'label' => 'Grid gap',
        'name' => 'grid_gap',
        'type' => 'range',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'default_value' => 2,
        'min' => 0,
        'max' => 10,
        'step' => 1,
        'prepend' => '',
        'append' => '',
      )
    ),
    'location' => array(
      array(
        array(
          'param' => 'block',
          'operator' => '==',
          'value' => 'acf/mosaic',
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