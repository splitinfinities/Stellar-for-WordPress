<?php global $item; ?>

<?php $code = preg_replace('/<br(\s+)?\/?>/i', "\n", $item["code"]) ?>
<?php $code = str_replace(array('<p>','</p>'), array('',''), $code) ?>
<?php $code = str_replace('<>', '', $code) ?>

<stellar-code language="<?php echo $item["language"]; ?>" <?php echo $item["preview"] ? "preview" : ""; ?> <?php echo !$item["preview"] ? "simple" : ""; ?>>
    <template><?php echo $code; ?></template>
</stellar-code>
