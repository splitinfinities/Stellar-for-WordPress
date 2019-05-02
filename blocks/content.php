<stellar-layout type="<?php the_field('type') ?>" align="<?php the_field('align') ?>" padding="<?php the_field('padding') ?>" size="<?php the_field('size') ?>" class="<?php if (get_field('theme') !== "theme-none") { the_field('theme'); } ?> <?php if (get_field('complement') !== "complement-none") { the_field('complement'); } ?> <?php the_field('color_mode') ?> <?php the_field('background_flood') ?>">
    <?php include "_flex.php"; ?>
</stellar-layout>
