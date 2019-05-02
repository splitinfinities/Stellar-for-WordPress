<header class="flex items-center flex-start">
	<div class="ml3 mr3 mv3" style="height: 3rem; width: 3rem;">
		<?php include "assets/stellar/collection/global/vector/mark.svg" ?>
	</div>
	<stellar-tabs class="mla mr-auto mb0" style="border: 0;">
		<?php $menu = wp_nav_menu([
			'echo' => false,
			'container'=> '',
			'walker' => new SPLITINFINITIES_Walker_Nav_Menu
		]);

		echo preg_replace(array(
			'#^<ul[^>]*>#',
			'#</ul>$#'
		), '', $menu);
		?>
	</stellar-tabs>
	<?php if (is_user_logged_in()): ?>
		<stellar-button ghost class="mh4" href="<?php echo get_edit_post_link() ?>">Edit</stellar-button>
	<?php endif; ?>
	<stellar-button padding="large" href="/contact">Contact</stellar-button>
</header>
