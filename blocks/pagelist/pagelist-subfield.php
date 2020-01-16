
<?php global $post; ?>
<stellar-layout 
    class="type-pagelist <?php if (get_sub_field('theme') !== "theme-none") { the_sub_field('theme'); } ?> <?php if (get_sub_field('complement') !== "complement-none") { the_sub_field('complement'); } ?> <?php the_sub_field('color_mode') ?> <?php the_sub_field('background_flood') ?>"
    padding="<?php the_sub_field('padding') ?>" 
    size="<?php the_sub_field('size') ?>" 
    >

    <?php if (get_sub_field("include_lead_in")): ?>
        <copy-wrap class="relative z-2" align="<?php the_sub_field("lead_in_alignment") ?>">
            <?php the_sub_field("lead_in"); ?>
        </copy-wrap>
    <?php endif; ?>

    <stellar-grid class="relative z-2" align="items-<?php the_sub_field('align') ?>" style="--grid-width:<?php the_sub_field('grid_width') ?>px; --grid-gap:<?php the_sub_field('grid_gap') ?>rem;">
        <?php $options = [
            'post_type' => get_sub_field("post_types"),
            'post_status' => 'publish',
            'posts_per_page' => -1,
        ];

        if (get_sub_field("tags")): 
            $options['tax_query'] = taxonomy_query(get_sub_field("tags"), 'display');
        endif;

        $posts = get_posts($options);
        ?>
        <?php foreach ($posts as $post): ?>
            <?php content('preview', $post->post_type) ?>
        <?php endforeach; ?>
    </stellar-grid>

    <?php if (get_sub_field("include_lead_in")): ?>
        <copy-wrap class="relative z-2">
            <?php the_sub_field("lead_out"); ?>
        </copy-wrap>
    <?php endif; ?>

    <?php if (get_sub_field("parallax")): ?>
        <?php component("starscape"); ?>
    <?php endif; ?>
</stellar-layout>
