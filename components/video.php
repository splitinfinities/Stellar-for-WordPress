<?php global $item; ?>

<?php if (get_field('video_360', $item["video"])): ?>
    <stellar-360-video src="<?php echo wp_get_attachment_url($item["video"]); ?>" <?php echo ($item["overlay"]) ? "overlay" : "" ?> <?php echo ($item["loop"]) ? "loop" : "" ?> <?php echo ($item["playsinline"]) ? "playsinline" : "" ?> <?php echo ($item["autoplay"]) ? "autoplay" : "" ?> controls="<?php echo $item["controls"]; ?>">
    </stellar-360-video>
<?php else: ?>
    <stellar-video <?php echo ($item["overlay"]) ? "overlay" : "" ?> <?php echo ($item["loop"]) ? "loop" : "" ?> <?php echo ($item["playsinline"]) ? "playsinline" : "" ?> <?php echo ($item["autoplay"]) ? "autoplay" : "" ?> controls="<?php echo $item["controls"]; ?>">
        <source src="<?php echo wp_get_attachment_url($item["video"]); ?>" />
    </stellar-video>
<?php endif; ?>
