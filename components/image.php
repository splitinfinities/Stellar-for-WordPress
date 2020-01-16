<?php global $item; ?>
<?php echo do_shortcode("[smart_image image_id='" . $item["image"] . "' type=".$item["type"]. " " . ($item["zoom"] ? "" : "nozoom") . " class='w-100 h-100 bg-center overflow-hidden db' block]"); ?>
