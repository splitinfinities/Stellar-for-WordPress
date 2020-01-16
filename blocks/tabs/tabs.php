<?php global $tabName; ?>
<?php global $first; ?>
<stellar-layout 
    id="<?php echo $template_args["id"]; ?>" 
    class="type-tabs <?php if (get_field('theme') !== "theme-none") { the_field('theme'); } ?> <?php if (get_field('complement') !== "complement-none") { the_field('complement'); } ?> <?php the_field('color_mode') ?> <?php the_field('background_flood') ?> <?php echo array_key_exists("className", $template_args) ? $template_args["className"] : ""; ?>"
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

    <?php if( have_rows('tabs') ): ?>
        <?php $tabName = "tab-kajsdkjhag"; ?>
        <div class="bg-white sticky z-2 w-100 tc flex items-end justify-center bb b--gray1" style="top: var(--nav-height)">
            <stellar-tabs class="subnav db bn center" name="<?php echo $tabName; ?>">
                <?php $first = true; ?>
                <?php while ( have_rows('tabs') ) : the_row();?>
                    <stellar-tab <?php echo ($first) ? "open" : ""; ?> href="#<?php echo strtolower(get_sub_field('title'));?>" name="<?php echo strtolower(get_sub_field('title'));?>"><?php the_sub_field('title');?></stellar-tab>
                    <?php $first = false; ?>
                <?php endwhile;?>
            </stellar-tabs>
        </div>
        <div>
            <?php $first = true; ?>
            <?php while ( have_rows('tabs') ) : the_row();?>
                <?php component("tab_content") ?>
                <?php $first = false; ?>
            <?php endwhile;?>
        </div>

    <?php else :?>

    <?php endif;?>

    <?php if (get_field("include_lead_out")): ?>
        <copy-wrap align="<?php the_field("lead_out_alignment") ?>">
            <?php the_field("lead_out"); ?>
        </copy-wrap>
    <?php endif; ?>
</stellar-layout>
