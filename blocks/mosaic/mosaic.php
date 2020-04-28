<?php global $item; ?>
<stellar-layout 
    id="<?php echo $template_args["id"]; ?>" 
    padding="<?php the_field('padding') ?>" 
    size="<?php the_field('size') ?>" 
    class="mosaic <?php echo (get_field("constrained_height")) ? "constrained" : "unconstrained"; ?> relative <?php if (get_field('theme') !== "theme-none") { the_field('theme'); } ?> <?php if (get_field('complement') !== "complement-none") { the_field('complement'); } ?> <?php the_field('color_mode') ?> <?php the_field('background_flood') ?> <?php echo array_key_exists("className", $template_args) ? $template_args["className"] : ""; ?>" 
    style=" --grid-gap:<?php the_field('grid_gap') ?>rem;">
    <?php if (get_field("include_lead_in")): ?>
        <copy-wrap class="relative z-2" align="<?php the_field("lead_in_alignment") ?>">
            <?php the_field("lead_in"); ?>
        </copy-wrap>
    <?php endif; ?>

    <?php if (have_rows('layouts')): ?>
        <?php while (have_rows('layouts')) : the_row();?>
            <stellar-grid class="relative z-2  <?php echo (get_sub_field("constrained_height")) ? "constrained" : "unconstrained"; ?> <?php the_sub_field('layout_type'); ?> <?php echo get_sub_field('flipped') ? "flipped" : "" ?> <?php echo get_sub_field('flipped_sizes') ? "flipped_sizes" : "" ?>" align="items-<?php the_field('align') ?>" style=" --grid-gap:<?php the_field('grid_gap') ?>rem;">
            <?php if (get_sub_field("the_content")): ?>
                <?php $nested = get_sub_field("the_content"); ?>
                <?php foreach ($nested as $item): ?>
                    <?php component("nested"); ?>
                <?php endforeach; ?>
            <?php endif; ?>
            </stellar-grid>
        <?php endwhile;?>
    <?php endif;?>

    <?php if (get_field("include_lead_out")): ?>
        <copy-wrap class="relative z-2" align="<?php the_field("lead_out_alignment") ?>">
            <?php the_field("lead_out"); ?>
        </copy-wrap>
    <?php endif; ?>

    <?php if (get_field("parallax")): ?>
        <?php component("starscape"); ?>
    <?php endif; ?>
</stellar-layout>
