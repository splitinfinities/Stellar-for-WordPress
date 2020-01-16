<stellar-layout 
    id="<?php echo $template_args["id"]; ?>" 
    class="type-grid <?php if (get_field('theme') !== "theme-none") { the_field('theme'); } ?> <?php if (get_field('complement') !== "complement-none") { the_field('complement'); } ?> <?php the_field('color_mode') ?> <?php the_field('background_flood') ?> <?php echo array_key_exists("className", $template_args) ? $template_args["className"] : ""; ?>"
    padding="<?php the_field('padding') ?>" 
    size="<?php the_field('size') ?>" 
    >

    <?php if (get_field("include_lead_in")): ?>
        <copy-wrap class="relative z-2" align="<?php the_field("lead_in_alignment") ?>">
            <?php the_field("lead_in"); ?>
        </copy-wrap>
    <?php endif; ?>
    
    <stellar-grid class="relative z-2" align="items-<?php the_field('align') ?>" style="--grid-width:<?php the_field('grid_width') ?>px; --grid-gap:<?php the_field('grid_gap') ?>rem;">
        <?php component("flex"); ?>
    </stellar-grid>

    <?php if (get_field("include_lead_out")): ?>
        <copy-wrap class="relative z-2" align="<?php the_field("lead_out_alignment") ?>">
            <?php the_field("lead_out"); ?>
        </copy-wrap>
    <?php endif; ?>

    <?php if (get_field("parallax")): ?>
        <?php component("starscape"); ?>
    <?php endif; ?>
</stellar-layout>
