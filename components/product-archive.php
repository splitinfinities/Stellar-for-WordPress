<?php global $product; ?>
<div>
    <div class="aspect-ratio--1x1 db center mb4 relative bg-base">
        <stellar-button tag="link" ghost href="<?php echo get_permalink($id) ?>" class="absolute top--1 left-1 z-999 underline">
            <p class="underline b black fs3 font-secondary"><?php the_title(); ?></p>
        </stellar-button>

        <?php echo do_shortcode('[smart_image image_id="' . get_field('featured_image', $id) . '" nozoom bg="none" class="aspect-ratio--object w-50 center" block]') ?>
    </div>
    <stellar-grid cols="3" responsive="false" flow="column" style="--grid-gap: 1rem;">
        <div class="size-3">
            <table class="fs7">
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

        <div class="size-3"><hr class="mv1" /></div>
        <div class="flex w-100 items-center justify-between size-3">
            <p class="lh-solid">
                <?php if ($product->is_on_sale()): ?>
                    <span class="strike">$<?php echo $product->get_regular_price(); ?></span>
                    $<?php echo $product->get_sale_price(); ?>
                <?php else: ?>
                    $<?php echo $product->get_price(); ?>
                <?php endif; ?>
            </p>
            <p class="lh-solid ml-auto mr0 mt0">
                <stellar-button tag="link" href="<?php echo get_permalink() ?>" ghost class="tr w-fit ml-auto lh-solid" size="tiny" padding="tiny" color="black" style="--color: var(--black);">Learn more</stellar-button>
            </p>
            <stellar-button tag="link" href="?add-to-cart=<?php echo $id; ?>" class="tr w-fit" size="tiny" pill padding="tiny" color="black" style="--background: var(--black);--active-background: var(--black);">Add to cart</stellar-button>
        </div>
    </stellar-grid>
</div>
