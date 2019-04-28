<?php
$all_notices  = WC()->session->get( 'wc_notices', array() );
$notice_types = apply_filters( 'woocommerce_notice_types', array( 'error', 'success', 'notice' ) );
global $messages;

// Buffer output.
ob_start();

foreach ( $notice_types as $notice_type ) {
    if ( wc_notice_count( $notice_type ) > 0 ) {
        $messages = $all_notices[ $notice_type ];?>

        <stellar-callout>
            <?php foreach ( $messages as $message ) : ?>
                <p class="w-100 flex items-center justify-between"><?php echo $message; ?></p>
            <?php endforeach; ?>
        </stellar-callout>

        <?php
    }
}

wc_clear_notices();

$notices = ob_get_clean();
?>

<?php echo $notices; ?>

<?php sendo()->capture_javascript_start() ?>
<style>
    stellar-callout p a.button {
        order: 999;
        background: var(--black) !important;
        color: white !important;
        border-radius: 1000rem !important;
        font-weight: 500 !important;
        padding: 0.5em 1em !important;
        font-size: 0.75rem !important;
    }
    stellar-callout {
        --background-color: var(--base-light);
    }
</style>
<?php sendo()->capture_javascript_end() ?>
