<?php global $item; ?>

<stellar-playlist title="<?php echo $item["title"]; ?>">
    <?php foreach ($item["files"] as $file): ?>
        <stellar-song artwork src="<?php echo make_href_root_relative($file["song"]); ?>"></stellar-song>
    <?php endforeach; ?>
</stellar-playlist>
