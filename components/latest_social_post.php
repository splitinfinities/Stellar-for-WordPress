<?php global $item; ?>
<?php if (has_recent_instagram_post($item["username"])): ?>
	<?php $insta = get_recent_instagram_post_by_username($item["username"]); ?>

	<stellar-grid class="ba b--black bg-gray1 items-center justify-between social-grid with-content">
		<div class="center w-100">
			<?php if ($insta->video): ?>
				<?php echo instagram_post_to_video($insta); ?>
			<?php else: ?>
				<?php echo instagram_post_to_smart_image($insta); ?>
			<?php endif; ?>
		</div>

		<div class="pv3 ph4 ph0-ns ph0-m ph0-l">
			<p class="mw-100"><?php echo $insta->caption; ?></p>
		</div>

		<div class="pr4 pb4">
			<?php wp_nav_menu([
					'theme_location' => 'socialmedia',
					'menu_class' => 'group',
					'walker' => new SPLITINFINITIES_Walker_Social
				]); ?>
		</div>
	</stellar-grid>
<?php else: ?>
	<?php $fallback_image_id = 1103; ?>
	<stellar-grid class="ba b--black bg-gray1 pv3 items-center justify-between social-grid">
		<div class="center w-100 pl3" style="max-width: 100px;">
			<?php echo do_shortcode("[smart_image image_id='$fallback_image_id' block nozoom]") ?>
		</div>

		<div class="pv3 ph4 ph0-ns ph0-m ph0-l">
			<?php echo $item["fallback_content"] ?>
		</div>

		<div class="pr3">
			<?php wp_nav_menu([
					'theme_location' => 'socialmedia',
					'menu_class' => 'group',
					'walker' => new SPLITINFINITIES_Walker_Social
				]); ?>
		</div>
	</stellar-grid>
<?php endif; ?>