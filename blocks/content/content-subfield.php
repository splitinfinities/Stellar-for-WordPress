<stellar-layout 
    class="type-content <?php if (get_sub_field('theme') !== "theme-none") { the_sub_field('theme'); } ?> <?php if (get_sub_field('complement') !== "complement-none") { the_sub_field('complement'); } ?> <?php the_sub_field('color_mode') ?> <?php the_sub_field('background_flood') ?>"
    type="<?php the_sub_field('type') ?>" 
    align="<?php the_sub_field('align') ?>" 
    padding="<?php the_sub_field('padding') ?>" 
    size="<?php the_sub_field('size') ?>" 
    >
    
    <?php if (get_sub_field("include_lead_in")): ?>
        <copy-wrap align="<?php the_sub_field("lead_in_alignment") ?>">
            <?php the_sub_field("lead_in"); ?>
        </copy-wrap>
    <?php endif; ?>
    
    <?php component("flex", "subfield"); ?>

    <?php if (get_sub_field("include_lead_out")): ?>
        <copy-wrap>
            <?php the_sub_field("lead_out"); ?>
        </copy-wrap>
    <?php endif; ?>
</stellar-layout>
