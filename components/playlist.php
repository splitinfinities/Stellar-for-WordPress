<?php global $item; ?>

<amass-player title="<?php echo $item["title"]; ?>">
    <?php foreach ($item["files"] as $song): ?>
        <amass-song src="<?php echo $song; ?>" />
    <?php endforeach; ?>
</amass-player>

<?php sendo()->append_javascript('https://unpkg.com/amass-player@0.1.1/dist/music.js') ?>
