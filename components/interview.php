<?php global $item; ?>
<stellar-interview src="<?php echo $item["audio_file"]; ?>" style="min-height: 20rem">
    <?php if ($item["lines"]): ?>
        <?php foreach ($item["lines"] as $line): ?>
            <stellar-interview-line in="<?php echo $line["start_time"]; ?>" out="<?php echo $line["end_time"]; ?>">
                <p><?php echo $line["primary"]; ?></p>
                <p><small><?php echo $line["supplemental"]; ?></small></p>
            </stellar-interview-line>
        <?php endforeach; ?>
    <?php endif; ?>
</stellar-interview>
