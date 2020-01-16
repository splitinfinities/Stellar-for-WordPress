<?php global $item; ?>

<?php if ($item["in_card"]): ?>
    <?php $sticky = $item['sticky'] && !get_field('parallax') ? 'sticky top-1 bottom-1' : ''; ?>
    <stellar-card class="overflow-hidden w-100 h-auto <?php echo $sticky; ?> <?php echo $item["card_color"]; ?>" style="--border: 0;">
<?php endif; ?>

<?php component($item["acf_fc_layout"]); ?>

<?php if ($item["in_card"]): ?>
    </stellar-card>
<?php endif; ?>
