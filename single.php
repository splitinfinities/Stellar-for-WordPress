<stellar-layout size="small">
	<?php while (have_posts()): the_post(); ?>
		<article <?php post_class(); ?>>
			<copy-wrap>
				<?php the_content(); ?>
			</copy-wrap>
		</article>
	<?php endwhile; ?>
</stellar-layout>
