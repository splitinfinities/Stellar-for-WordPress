<stellar-layout 
    id="<?php echo $template_args["id"]; ?>" 
    intrinsicsize="1900 x 800"
    padding="none" 
    size="flush" 
    align="<?php the_field('align') ?>" 
    class="type-hero layer-children <?php echo (!get_field('background_image') && !get_field('background_video')) ? "parallax" : "no-parallax"; ?> <?php if (get_field('theme') !== "theme-none") { the_field('theme'); } ?> relative overflow-hidden <?php the_field('background_flood') ?> <?php the_field('color_mode') ?> <?php echo array_key_exists("className", $template_args) ? $template_args["className"] : ""; ?>"
    >
    <stellar-layout type="<?php the_field('type') ?>" padding="<?php the_field('padding') ?>" size="<?php the_field('size') ?>" class="relative z-3">
        <?php component("flex"); ?>
    </stellar-layout>

    <?php if (get_field('background_image')): ?>
        <?php $image = get_field('background_image'); ?>
        <?php echo do_shortcode("[smart_image image_id='$image' nozoom block type='background' priority='true']") ?>
    <?php elseif (get_field('background_video')): ?>
        <?php global $item; ?>
        <?php $item["video"] = get_field('background_video'); ?>
        <?php $item["controls"] = "false" ?>
        <?php $item["playsinline"] = true ?>
        <?php $item["autoplay"] = true ?>
        <?php $item["overlay"] = true ?>
        <?php component('video'); ?>
    <?php else: ?>
        <?php component("starscape"); ?>
    <?php endif;?>

</stellar-layout>


