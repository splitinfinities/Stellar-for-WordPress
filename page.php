<?php sendo()->hide_chrome() ?>
<?php if ( have_rows( 'hero', 5 ) ) : ?>
	<?php while ( have_rows( 'hero', 5 ) ) : the_row(); ?>
		<div class="relative overflow-hidden z-2">
			<div class="relative z-999 white tc" style="padding: 6.25% 5rem;">
				<h1 id="copy" class="fs-massive font-primary base"><?php the_title(); ?></h1>
			</div>
			<div class="absolute w-100 h-100 top-0 left-0 bg-black">
				<?php echo do_shortcode('[smart_image image_id="' . get_sub_field( 'image', 5 ) . '" nozoom block type="background"]') ?>
			</div>
		</div>
	<?php endwhile; ?>
<?php endif; ?>

<?php while (have_posts()): the_post(); ?>
	<article <?php post_class(); ?>>
		<?php the_content(); ?>
	</article>
<?php endwhile; ?>
