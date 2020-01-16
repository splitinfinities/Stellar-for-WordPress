<?php global $sendo; ?>

<?php if (have_rows('sdo_social_connect', 'options') ): ?>
    <ul class="list pa0">
        <?php while ( have_rows('sdo_social_connect', 'options') ) : the_row(); ?>
            <li class="dib pa2"><a href="<?php the_sub_field('platform_url'); ?>" target="_blank" class="black hover-black fs4" title="<?php the_sub_field('platform'); ?>"><ion-icon name="<?php the_sub_field('platform'); ?>" language="logo-"></ion-icon></a></li>
        <?php endwhile; ?>
    </ul>
<?php endif; ?>
