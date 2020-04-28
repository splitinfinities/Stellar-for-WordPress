<stellar-layout 
    padding="none" 
    intrinsicsize="1900 x 800"
    size="flush" 
    align="<?php the_field('align') ?>" 
    class="type-hero layer-children <?php echo (!get_sub_field('background_image') && !get_sub_field('background_video')) ? "parallax" : "no-parallax"; ?> <?php if (get_sub_field('theme') !== "theme-none") { the_sub_field('theme'); } ?> relative overflow-hidden <?php the_sub_field('background_flood') ?> <?php the_sub_field('color_mode') ?>"
    >
    <stellar-layout type="<?php the_sub_field('type') ?>" align="<?php the_sub_field('align') ?>" padding="<?php the_sub_field('padding') ?>" size="<?php the_sub_field('size') ?>" class="relative z-3">
        <?php component("flex", "subfield"); ?>
    </stellar-layout>

    <?php if (get_sub_field('background_image')): ?>
        <?php $image = get_sub_field('background_image'); ?>
        <?php echo do_shortcode("[smart_image image_id='$image' nozoom block type='background' class='absolute w-100 h-100 top-0 left-0 bottom-0 right-0 z-1' priority='true']") ?>
    <?php elseif (get_sub_field('background_video')): ?>
        <?php global $item; ?>
        <?php $item["video"] = get_sub_field('background_video'); ?>
        <?php $item["controls"] = "false" ?>
        <?php $item["playsinline"] = true ?>
        <?php $item["autoplay"] = true ?>
        <?php $item["overlay"] = true ?>
        <?php component('video'); ?>
    <?php else: ?>
        <?php component("starscape"); ?>
    <?php endif;?>

</stellar-layout>


