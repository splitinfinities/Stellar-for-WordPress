<?php global $item; ?>

<?php if (get_field('video_360', $item["video"])): ?>
    <stellar-360-video src="<?php echo wp_get_attachment_url($item["video"]); ?>">
    </stellar-360-video>
<?php else: ?>
    <stellar-video>
        <source src="<?php echo wp_get_attachment_url($item["video"]); ?>" />
    </stellar-video>
<?php endif; ?>
