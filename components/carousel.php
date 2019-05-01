<?php global $item; ?>

<stellar-slides effect="<?php echo $item['effect'] ?>" speed="<?php echo $item['speed'] ?>" direction="<?php echo $item['direction'] ?>" auto_height="<?php echo $item['autoHeight'] ? "true" : "false"; ?>" pagination="<?php echo $item['pagination'] ? "true" : "false"; ?>" loop="<?php echo $item['loop'] ? "true" : "false"; ?>" watch_slides_progress="<?php echo $item['watch_slides_progress'] ? "true" : "false"; ?>" watch_slides_visibility="<?php echo $item['watch_slides_visibility'] ? "true" : "false"; ?>" slidesPerView="<?php echo $item['slides_per_view'] ?>" centeredSlides="<?php echo $item['centered_slides'] ? "true" : "false"; ?>" spaceBetween="<?php echo $item['space_between']; ?>" pager="<?php echo $item['pagination'] ? "true" : "false"; ?>" style="min-height:40rem;">
    <?php if ($item["nested_the_content"]): ?>
        <?php $nested = $item["nested_the_content"]; ?>
        <?php foreach ($nested as $item): ?>
            <stellar-slide>
                <?php block("_nested"); ?>
            </stellar-slide>
        <?php endforeach; ?>
    <?php endif; ?>
</stellar-slides>
