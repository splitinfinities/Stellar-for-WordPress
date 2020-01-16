<?php global $item; ?>
<?php $content = get_field('content'); ?>

<?php if (!$content): ?>
    <?php $content = get_sub_field('content'); ?>
<?php endif; ?>


<?php foreach ($content["the_content"] as $key=>$item): ?>
    <?php $sticky = $item['sticky'] && !get_field('parallax') ? 'sticky top-1 bottom-1' : ''; ?>

    <?php if ($item["in_card"]): ?>
        <stellar-card class="overflow-hidden w-100 h-auto <?php echo $sticky; ?> <?php echo $item["card_color"]; ?>" style="--border: 0;">
    <?php else: ?>
        <div class="dc <?php echo $sticky; ?>">
    <?php endif; ?>

    <?php component($item["acf_fc_layout"]); ?>

    <?php if ($item["in_card"]): ?>
        </stellar-card>
    <?php else: ?>
        </div>
    <?php endif; ?>
<?php endforeach; ?>
