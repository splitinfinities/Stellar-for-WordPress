<?php global $item; ?>

<?php $has_posts = true; ?>

<?php if ($item["platform"] === "twitter"): ?>
            
<?php elseif ($item["platform"] === "facebook"): ?>

<?php elseif ($item["platform"] === "instagram"): ?>
    <?php $has_posts = has_instagram_posts($item["username"]); ?>
<?php elseif ($item["platform"] === "dribbble"): ?>

<?php elseif ($item["platform"] === "vimeo"): ?>
    
<?php endif; ?>

<?php if ($has_posts): ?>
    <stellar-simple-slides class="pv4 mw-100 overflow-hidden" effect="<?php echo $item['effect'] ?>" speed="<?php echo $item['speed'] ?>" direction="<?php echo $item['direction'] ?>" blurring="false" auto-height="<?php echo $item['autoHeight'] ? "true" : "false"; ?>" pagination="<?php echo $item['pagination'] ? "true" : "false"; ?>" loop="<?php echo $item['loop'] ? "true" : "false"; ?>" watch-slides-progress="<?php echo $item['watch_slides_progress'] ? "true" : "false"; ?>" watch-slides-visibility="<?php echo $item['watch_slides_visibility'] ? "true" : "false"; ?>" slides-per-view="<?php echo $item['slides_per_view'] ?>" centered-slides="<?php echo $item['centered_slides'] ? "true" : "false"; ?>" space-between="<?php echo $item['space_between']; ?>" pager="<?php echo $item['pagination'] ? "true" : "false"; ?>">
        <?php if ($item["what_do_slides_contain"] === "socialmedia"): ?>
            <?php if ($item["platform"] === "twitter"): ?>
                
            <?php elseif ($item["platform"] === "facebook"): ?>

            <?php elseif ($item["platform"] === "instagram"): ?>
                <?php show_instagram_feed_by_username($item["username"], '<stellar-slide width="25vw">', '</stellar-slide>') ?>
            <?php elseif ($item["platform"] === "dribbble"): ?>
            
            <?php elseif ($item["platform"] === "vimeo"): ?>
                
            <?php endif; ?>
        <?php elseif ($item["what_do_slides_contain"] === "pagelist"): ?>
            pagelist
        <?php elseif ($item["what_do_slides_contain"] === "custom"): ?>
            <?php if ($item["nested_the_content"]): ?>
                <?php $nested = $item["nested_the_content"]; ?>
                <?php foreach ($nested as $item): ?>
                    <stellar-slide width="25vw">
                        <?php component("nested"); ?>
                    </stellar-slide>
                <?php endforeach; ?>
            <?php endif; ?>
        <?php else: ?>
            <?php if ($item["nested_the_content"]): ?>
                <?php $nested = $item["nested_the_content"]; ?>
                <?php foreach ($nested as $item): ?>
                    <stellar-slide width="25vw">
                        <?php component("nested"); ?>
                    </stellar-slide>
                <?php endforeach; ?>
            <?php endif; ?>
        <?php endif; ?>
    </stellar-simple-slides>
<?php endif; ?>