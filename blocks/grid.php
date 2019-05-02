<stellar-layout padding="<?php the_field('padding') ?>" size="<?php the_field('size') ?>" class="<?php if (get_field('theme') !== "theme-none") { the_field('theme'); } ?> <?php if (get_field('complement') !== "complement-none") { the_field('complement'); } ?> <?php the_field('color_mode') ?> <?php the_field('background_flood') ?>">
    <stellar-grid align="items-<?php the_field('align') ?>" style="--grid-width:<?php the_field('grid_width') ?>px; --grid-gap:<?php the_field('grid_gap') ?>rem; ">
        <?php include "_flex.php"; ?>
    </stellar-grid>
</stellar-layout>
