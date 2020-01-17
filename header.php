<?php if (get_field("features", "options") && in_array("message", get_field("features", "options"))): ?>
	<stellar-message type="alert">
		<?php the_field("message_content", "options") ?>
	</stellar-message>
<?php endif; ?>
<header class="sticky top-0 z-5 bg-white dm-bg-black bb b--gray1 dm-b--gray9">
	<stellar-layout padding="none" size="large">
		<div class="flex-l flex-m flex-ns items-stretch flex-start justify-between">
			<a href="/" class="flex items-center justify-center no-underline pv3">
				<?php the_theme_logo(); ?>
				<?php if (display_header_text()): ?>
				<div class="ml3">
					<h1 class="fs6 ma0 pa0 fw7 tracked"><?php bloginfo( "name" ); ?></h1>
					<p class="ma0 pa0"><?php bloginfo( "description" ); ?></p>
				</div>
				<?php endif; ?>
			</a>
			<div class="inline-flex items-stretch flex-start w-100 w-auto-l w-auto-m w-auto-ns">
				<stellar-tabs class="ml-auto-l mr4-l mb0-l ml-auto-m mr4-m mb0-m center" style="border: 0;" >
					<?php $menu = wp_nav_menu([
						'echo' => false,
						'theme_location' => 'header',
						'container'=> '',
						'walker' => new SPLITINFINITIES_Walker_Tabs
					]);

					echo preg_replace(array(
						'#^<ul[^>]*>#',
						'#</ul>$#'
					), '', $menu);
					?>
				</stellar-tabs>

				<hr class="vertical self-center bg-black dm-bg-white" />

				<?php wp_nav_menu([
						'theme_location' => 'footer_four',
						'menu_class' => 'group mt0',
						'container_class' => 'self-center',
						'walker' => new SPLITINFINITIES_Walker_Social
					]); ?>

				<?php if (is_user_logged_in()): ?>
					<stellar-button href="<?php echo get_edit_post_link() ?>">Edit</stellar-button>
				<?php endif; ?>
			</div>
		</div>
	</stellar-layout>
</header>
