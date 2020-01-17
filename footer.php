<footer class="bg-black relative">
	<stellar-layout size="large">
		<stellar-grid style="--grid-gap: 3rem;">
			<div>
				<p class="white ttu b tracked fw9 mb3"><?php echo wp_get_nav_menu_name("footer_one") ?></p>
				<?php wp_nav_menu([
					'theme_location' => 'footer_one',
					'menu_class' => 'list ma0 pa0',
					'walker' => new SPLITINFINITIES_Walker_Anchors
				]); ?>
			</div>

			<div>
				<p class="white ttu b tracked fw9 mb3"><?php echo wp_get_nav_menu_name("footer_two") ?></p>
				<?php wp_nav_menu([
					'theme_location' => 'footer_two',
					'menu_class' => 'list ma0 pa0',
					'walker' => new SPLITINFINITIES_Walker_Anchors
				]); ?>
			</div>

			<div>
				<p class="white ttu b tracked fw9 mb3"><?php echo wp_get_nav_menu_name("footer_three") ?></p>
				<?php wp_nav_menu([
					'theme_location' => 'footer_three',
					'menu_class' => 'list ma0 pa0',
					'walker' => new SPLITINFINITIES_Walker_Anchors
				]); ?>
			</div>

			<div>
				<p class="white ttu b tracked fw9 mb3"><?php echo wp_get_nav_menu_name("footer_four") ?></p>
				<?php wp_nav_menu([
					'theme_location' => 'footer_four',
					'menu_class' => 'list ma0 pa0',
					'walker' => new SPLITINFINITIES_Walker_SocialText
				]); ?>
			</div>
			<div class="invert bl b--white pl4 h-100">
				<?php echo do_shortcode('[caldera_form id="CF5df069d9a57f9"]') ?>
			</div>
		</stellar-grid>
	</stellar-layout>
	<stellar-layout class="bt b--base" size="large" padding="tiny">
		<p class="base">&copy; <?php echo date("Y"); ?> <?php get_bloginfo() ?>. All rights reserved. </p>
	</stellar-layout>
</footer>
