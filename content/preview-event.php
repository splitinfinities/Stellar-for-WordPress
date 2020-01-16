<?php global $event; ?>
<stellar-grid class="striped--gray0 pa3 bt event-preview" align="items-center">
	<div>
		<h3 class="b"><?php the_field("start_time", $event->ID) ?></h3>
	</div>
	<div>
		<p><?php echo get_field("location", $event->ID)["address"]; ?></p>
	</div>
	<div>
		<h4 class="fs6"><?php echo $event->post_title; ?></h4>
		<?php the_field("details", $event->ID); ?>
	</div>
	<div>
		<a href="<?php the_field("link"); ?>" class="black pointer" target="_blank"><ion-icon name="logo-facebook" class="fs3"></ion-icon></a>
	</div>
</stellar-grid>