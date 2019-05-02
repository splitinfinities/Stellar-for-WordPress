<?php global $item; ?>
<?php $content = get_field('content'); ?>

<?php foreach ($content["the_content"] as $key=>$item): ?>
    <?php $sticky = $item['sticky'] && !get_field('parallax') ? 'sticky top-1 bottom-1' : ''; ?>

    <?php if (get_field('parallax')): ?>
        <stellar-parallax-section speed="<?php echo ($key * 5) - 9 ?>" class="relative mt6">
    <?php endif; ?>
        <?php if ($item["in_card"]): ?>
            <stellar-card class="overflow-hidden w-100 <?php echo $sticky; ?> <?php echo $item["card_color"]; ?>" style="--border: 0;">
        <?php else: ?>
            <div class="db w-100 <?php echo $sticky; ?>">
        <?php endif; ?>

        <?php component($item["acf_fc_layout"]); ?>

        <?php if ($item["in_card"]): ?>
            </stellar-card>
        <?php else: ?>
            </div>
        <?php endif; ?>

    <?php if (get_field('parallax')): ?>
        </stellar-parallax-section>
    <?php endif; ?>
<?php endforeach; ?>
