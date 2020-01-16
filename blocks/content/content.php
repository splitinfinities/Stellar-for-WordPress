<stellar-layout 
    id="<?php echo $template_args["id"]; ?>" 
    class="type-content <?php if (get_field('theme') !== "theme-none") { the_field('theme'); } ?> <?php if (get_field('complement') !== "complement-none") { the_field('complement'); } ?> <?php the_field('color_mode') ?> <?php the_field('background_flood') ?> <?php echo array_key_exists("className", $template_args) ? $template_args["className"] : ""; ?>"
    type="<?php the_field('type') ?>" 
    align="<?php the_field('align') ?>" 
    padding="<?php the_field('padding') ?>" 
    size="<?php the_field('size') ?>" 
    >

    <?php if (get_field("include_lead_in")): ?>
        <copy-wrap align="<?php the_field("lead_in_alignment") ?>">
            <?php the_field("lead_in"); ?>
        </copy-wrap>
    <?php endif; ?>

    <?php component("flex"); ?>

    <?php if (get_field("include_lead_out")): ?>
        <copy-wrap align="<?php the_field("lead_out_alignment") ?>">
            <?php the_field("lead_out"); ?>
        </copy-wrap>
    <?php endif; ?>
</stellar-layout>
