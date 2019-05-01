<?php global $item; ?>

<?php if ($item["in_card"]): ?>
    <stellar-card>
<?php endif; ?>

<?php component($item["acf_fc_layout"]); ?>

<?php if ($item["in_card"]): ?>
    </stellar-card>
<?php endif; ?>
