<?php
if ( is_singular( 'product' ) ) {
    while ( have_posts() ) :
        the_post();
        get_template_part('single-product');
    endwhile;
} else {
    get_template_part('archive-product');
}
