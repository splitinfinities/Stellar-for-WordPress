<?php global $item; ?>

<stellar-code language="<?php echo $item["language"]; ?>" <?php echo $item["preview"] ? "preview" : ""; ?> <?php echo !$item["preview"] ? "simple" : ""; ?>>
    <template><?php echo preg_replace('/<br(\s+)?\/?>/i', "\n", $item["code"]); ?></template>
</stellar-code>
