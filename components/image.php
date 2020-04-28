<?php global $item; ?>
<?php if (wp_get_attachment_caption($item["image"])): ?>
  <div class="relative">
    <p class="sticky top-1 w-100 left-1 right-1 ml-1 bg-white tl dm-bg-black pa3 z-2 h-0"><?php echo wp_get_attachment_caption($item["image"]); ?></p>
    <?php echo do_shortcode("[smart_image image_id='" . $item["image"] . "' type=".$item["type"]. " " . ($item["zoom"] ? "" : "nozoom") . " class='w-100 h-100 bg-center overflow-hidden db' block ]"); ?>
  </div>
<?php else: ?>
  <?php echo do_shortcode("[smart_image image_id='" . $item["image"] . "' type=".$item["type"]. " " . ($item["zoom"] ? "" : "nozoom") . " class='w-100 h-100 bg-center overflow-hidden db' block]"); ?>
<?php endif; ?>
