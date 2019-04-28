<?php global $inverted; ?>
<?php global $sendo; ?>
<?php $sendo->set_title("Archive"); ?>

<?php if ( have_posts() ) : ?>

	<?php if ( have_rows( 'blocks', 38 ) ) : ?>
		<?php while ( have_rows( 'blocks', 38 ) ) : the_row(); ?>

		<?php endwhile; ?>
	<?php endif; ?>
<?php else : ?>
    <?php get_template_part('404'); ?>
<?php endif; ?>
