<?php global $item; ?>
<?php if ($item["source"] === "link"): ?>
    <stellar-markdown src="<?php echo $item["url"] ?>"></stellar-markdown>
<?php elseif ($item["source"] === "file"): ?>
    <stellar-markdown src="<?php echo $item["file"] ?>"></stellar-markdown>
<?php elseif ($item["source"] === "raw"): ?>
    <stellar-markdown><template><?php echo $item["copy"] ?></template></stellar-markdown>
<?php endif; ?>
