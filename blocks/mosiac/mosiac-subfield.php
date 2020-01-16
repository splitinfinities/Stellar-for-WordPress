<?php global $item; ?>
<stellar-layout padding="<?php the_sub_field('padding') ?>" size="<?php the_sub_field('size') ?>" class="mosiac relative <?php if (get_sub_field('theme') !== "theme-none") { the_sub_field('theme'); } ?> <?php if (get_sub_field('complement') !== "complement-none") { the_sub_field('complement'); } ?> <?php the_sub_field('color_mode') ?> <?php the_sub_field('background_flood') ?>" style=" --grid-gap:<?php the_sub_field('grid_gap') ?>rem;">
    <?php if (get_sub_field("include_lead_in")): ?>
        <copy-wrap class="relative z-2" align="<?php the_sub_field("lead_in_alignment") ?>">
            <?php the_sub_field("lead_in"); ?>
        </copy-wrap>
    <?php endif; ?>

    <?php if (have_rows('layouts')): ?>
        <?php while (have_rows('layouts')) : the_row();?>
            <stellar-grid class="relative z-2 <?php the_sub_field('layout_type'); ?> <?php echo get_sub_field('flipped') ? "flipped" : "" ?> <?php echo get_sub_field('flipped_sizes') ? "flipped_sizes" : "" ?>" align="items-<?php the_sub_field('align') ?>" style=" --grid-gap:<?php the_sub_field('grid_gap') ?>rem;">
            <?php if (get_sub_field("the_content")): ?>
                <?php $nested = get_sub_field("the_content"); ?>
                <?php foreach ($nested as $item): ?>
                    <?php component("nested"); ?>
                <?php endforeach; ?>
            <?php endif; ?>
            </stellar-grid>
        <?php endwhile;?>
    <?php endif;?>

    <?php if (get_sub_field("include_lead_out")): ?>
        <copy-wrap class="relative z-2">
            <?php the_sub_field("lead_out"); ?>
        </copy-wrap>
    <?php endif; ?>

    <?php if (get_sub_field("parallax")): ?>
        <?php component("starscape"); ?>
    <?php endif; ?>
</stellar-layout>
