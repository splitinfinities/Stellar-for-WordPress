<stellar-layout 
    id="<?php echo $template_args["id"]; ?>"
    padding="<?php the_field('padding') ?>"
    class="pa<?php echo get_field("spacer_size") - 2 ?> pa<?php echo get_field("spacer_size") - 1 ?>-m pa<?php the_field("spacer_size") ?>-l <?php if (get_field('theme') !== "theme-none") { the_field('theme'); } ?> <?php if (get_field('complement') !== "complement-none") { the_field('complement'); } ?> <?php the_field('color_mode') ?> <?php the_field('background_flood') ?> <?php echo array_key_exists("className", $template_args) ? $template_args["className"] : ""; ?>">
    <?php if (get_field("parallax")): ?>
        <?php component("starscape"); ?>
    <?php endif; ?>
</stellar-layout>
