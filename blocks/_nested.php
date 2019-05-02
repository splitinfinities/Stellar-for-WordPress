<?php global $item; ?>

<?php if ($item["in_card"]): ?>
    <stellar-card class="bn <?php echo $item["card_color"]; ?>" style="--border: 0;">
<?php endif; ?>

<?php component($item["acf_fc_layout"]); ?>

<?php if ($item["in_card"]): ?>
    </stellar-card>
<?php endif; ?>
