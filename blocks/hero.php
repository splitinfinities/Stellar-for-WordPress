<stellar-layout padding="none" size="flush" class="relative overflow-hidden">
    <stellar-layout type="<?php the_field('type') ?>" align="<?php the_field('align') ?>" padding="<?php the_field('padding') ?>" size="<?php the_field('size') ?>" class="z-5 absolute top-0 bottom-0 left-0 right-0 <?php if (get_field('theme') !== "theme-none") { the_field('theme'); } ?> <?php the_field('color_mode') ?>">
        <?php if (get_field('parallax')): ?>
        <stellar-parallax class="dc" style="pointer-events: none">
        <?php endif;?>

            <?php include "_flex.php"; ?>

        <?php if (get_field('parallax')): ?>
        </stellar-parallax>
        <?php endif;?>
    </stellar-layout>

    <div class="">
        <?php if (get_field('background_image')): ?>
            <?php $image = get_field('background_image'); ?>
            <?php echo do_shortcode("[smart_image image_id='$image' nozoom block type='background']") ?>
        <?php elseif (get_field('background_video')): ?>
            <?php global $item; ?>
            <?php $item["video"] = get_field('background_video'); ?>
            <?php component('video'); ?>
        <?php else: ?>
            <div class="aspect-ratio aspect-ratio--16x9 z-1 relative">
                <stellar-starscape class="aspect-ratio--object"></stellar-starscape>
            </div>
        <?php endif;?>
    </div>
</stellar-layout>
