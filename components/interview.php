<?php global $item; ?>
<?php global $nested; ?>
<stellar-interview src="<?php echo $item["audio_file"]; ?>" style="min-height: 20rem">
    <?php if ($item["lines"]): ?>
        <copy-wrap align="center" slot="transcript" class="db">
            <?php foreach ($item["lines"] as $line): ?>
                <stellar-interview-line in="<?php echo $line["start_time"]; ?>" out="<?php echo $line["end_time"]; ?>">
                    <p class="fs5 b lh-solid white"><?php echo $line["primary"]; ?></p>
                    <?php if ($line["supplemental"]): ?>
                        <p class="fs6 b lh-solid theme-base2"><small><?php echo $line["supplemental"]; ?></small></p>
                    <?php endif; ?>
                </stellar-interview-line>
            <?php endforeach; ?>
        </copy-wrap>
    <?php endif; ?>
    <?php if ($item["nested_the_content"]): ?>
        <?php $nested = $item["nested_the_content"]; ?>
        <?php foreach ($nested as $item): ?>
            <?php block("_nested"); ?>
        <?php endforeach; ?>
    <?php endif; ?>
</stellar-interview>
