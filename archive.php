<?php global $inverted; ?>
<?php global $sendo; ?>
<?php $sendo->set_title("Archive"); ?>

<?php if ( have_posts() ) : ?>
	<stellar-layout size="large">
		<stellar-grid>
			<?php while (have_posts()): the_post(); ?>
				<stellar-card padding="small" tag="a" href="<?php the_permalink(); ?>">
					<section>
						<copy-wrap align="center">
							<h3 class="b black-alt"><?php the_title(); ?></h3>
						</copy-wrap>
					</section>
				</stellar-card>
			<?php endwhile; ?>
		</stellar-grid>
	</stellar-layout>
<?php else : ?>
    <?php get_template_part('404'); ?>
<?php endif; ?>
