<?php global $id; ?>
<?php $product = wc_get_product( $id ); ?>

<stellar-grid cols="2" class="black" align="items-center">
    <div class="aspect-ratio--1x1 db center relative bg-base w-100">
        <?php echo do_shortcode('[smart_image image_id="' . get_field('featured_image', $id) . '" nozoom bg="none" class="aspect-ratio--object w-50 center" block]') ?>
    </div>
    <stellar-grid class="tl" cols="3" responsive="false" flow="column" style="--grid-gap: 1rem;">
        <div class="size-3">
            <stellar-button tag="link" ghost href="<?php echo get_permalink($id) ?>" class="underline mb2 black">
                <p class="fs3 underline b black font-secondary"><?php echo get_the_title($id); ?></p>
            </stellar-button>
        </div>

        <p class="lh-solid size-3 mb3">
            <?php if ($product->is_on_sale()): ?>
                <span class="strike">$<?php echo $product->get_regular_price(); ?></span>
                $<?php echo $product->get_sale_price(); ?>
            <?php else: ?>
                $<?php echo $product->get_price(); ?>
            <?php endif; ?>
        </p>

        <div class="size-3">
            <table class="fs8">
                <tr class="h2">
                    <td class="b ttu" width="25%">Top:</td>
                    <td><?php echo $product->get_attribute('Top'); ?></td>
                </tr>
                <tr class="h2">
                    <td class="b ttu" width="25%">Heart:</td>
                    <td><?php echo $product->get_attribute('Heart'); ?></td>
                </tr>
                <tr class="h2">
                    <td class="b ttu" width="25%">Base:</td>
                    <td><?php echo $product->get_attribute('Base'); ?></td>
                </tr>
            </table>
        </div>

        <div class="flex w-100 items-center justify-between size-3">
            <stellar-button tag="link" href="?add-to-cart=<?php echo $id; ?>" class="tr w-fit" size="tiny" pill padding="tiny" color="black" style="--background: var(--black);--active-background: var(--black);">Add to cart</stellar-button>
            <p class="lh-solid">
                <stellar-button tag="link" href="<?php echo get_permalink($id) ?>" ghost class="tr w-fit ml-auto lh-solid" size="tiny" padding="none" color="black" style="--color: var(--black);">Learn more</stellar-button>
            </p>
        </div>
    </stellar-grid>
</stellar-grid>
