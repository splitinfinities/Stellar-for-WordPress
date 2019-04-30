<?php global $item; ?>
<?php $content = get_field('content'); ?>

<?php foreach ($content["the_content"] as $item): ?>
    <?php if ($item["in_card"]): ?>
        <stellar-card>
    <?php endif; ?>


    <?php component($item["acf_fc_layout"]); ?>

    <?php if ($item["in_card"]): ?>
        </stellar-card>
    <?php endif; ?>
<?php endforeach; ?>
