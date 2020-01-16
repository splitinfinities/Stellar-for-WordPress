<?php global $tabName; ?>
<?php global $first; ?>
<stellar-content <?php echo ($first) ? "open" : ""; ?> for="<?php echo $tabName; ?>" id="<?php echo strtolower(get_sub_field('title'));?>">
    <?php if( have_rows('tab_content') ): ?>
        <?php while ( have_rows('tab_content') ) : the_row(); ?>
            <?php block(get_row_layout(), [], "subfield") ?>
        <?php endwhile; ?>
    <?php else: ?>
    <?php endif;?>
</stellar-content>