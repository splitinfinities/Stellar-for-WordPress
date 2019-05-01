<stellar-layout padding="none" size="flush" class="overflow-hidden <?php if (get_field('theme') !== "theme-none") { the_field('theme'); } ?> <?php if (get_field('complement') !== "complement-none") { the_field('complement'); } ?> <?php the_field('color_mode') ?> <?php the_field('background_flood') ?>" style="height: calc(30rem + 20vw)">
    <stellar-parallax class="relative z-1">
        <stellar-parallax-section speed="0" style="pointer-events: none;">
            <div class="aspect-ratio aspect-ratio--16x9 mb4"></div>
        </stellar-parallax-section>

        <stellar-parallax-section speed="-4" class="absolute" style="top: 5rem;height: 150%;">
            <?php if (get_field('background_image')): ?>
                <?php $image = get_field('background_image'); ?>
                <?php echo do_shortcode("[smart_image image_id='$image' nozoom block type='background' class='h-100']") ?>
            <?php endif;?>
            <?php if (get_field('background_video')): ?>
                <?php global $item; ?>
                <?php $item["video"] = get_field('background_video'); ?>
                <?php component('video'); ?>
            <?php endif;?>
        </stellar-parallax-section>

        <stellar-parallax-section speed="7" class="absolute top-0 z-3 mt6" style="pointer-events: none;height: auto;">
            <?php include "_flex.php"; ?>
        </stellar-parallax-section>

        <stellar-parallax-section class="absolute z-2 w-100 h-100 left-0 db o-7" style="pointer-events: none; mix-blend-mode: lighten;">
            <div class="db w-100 h-100 absolute top-0 left-0 right-0 bottom-0" style="background-image: -webkit-radial-gradient(80% 10%, circle, var(--theme-base5), transparent), -webkit-radial-gradient(80% 50%, circle, var(--theme-complement5), transparent), -webkit-radial-gradient(20% 80%, 40em 40em, var(--theme-complement9), transparent), -webkit-radial-gradient(10% 10%, circle, var(--theme-base2), transparent);height:150vw; top: 0%;"></div>
        </stellar-parallax-section>
    </stellar-parallax>
</stellar-layout>
