<?php $date_now = date('Y-m-d H:i:s'); ?>
<?php global $event; ?>

<stellar-layout 
    id="<?php echo $template_args["id"]; ?>" 
    class="type-events <?php if (get_field('theme') !== "theme-none") { the_field('theme'); } ?> <?php if (get_field('complement') !== "complement-none") { the_field('complement'); } ?> <?php the_field('color_mode') ?> <?php the_field('background_flood') ?> <?php echo array_key_exists("className", $template_args) ? $template_args["className"] : ""; ?>"
    padding="<?php the_field('padding') ?>" 
    size="<?php the_field('size') ?>" 
    >

    <?php if (get_field("include_lead_in")): ?>
        <copy-wrap class="relative z-2" align="<?php the_field("lead_in_alignment") ?>">
            <?php the_field("lead_in"); ?>
        </copy-wrap>
    <?php endif; ?>
    
    <stellar-tabs name="events" class="subnav bg-white sticky z-2 w-100 tc flex items-end justify-center bb b--gray1" style="top: var(--nav-height)">
        <stellar-tab open name="upcoming">Upcoming Events</stellar-tab>
        <stellar-tab name="past">Past Events</stellar-tab>
    </stellar-tabs>
    
    <stellar-content for="events" id="upcoming" open>
        <?php $events = get_posts([
            'posts_per_page' => -1,
            'post_type' => "event",
            'post_status' => 'publish',
            'meta_query'     => array(
                array(
                    'key'         => 'start_time',
                    'compare'     => '>=',
                    'value'       => $date_now,
                    'type'        => 'DATETIME'
                )
            )]); ?>
        <?php if ($events): ?>
            <stellar-grid class="relative z-2" align="items-<?php the_field('align') ?>" style="--grid-width:1fr; --grid-gap:0;">    
                <stellar-grid class="pa3 event-preview header" align="items-center">
                    <div>
                        <h3 class="b i">Date</h3>
                    </div>
                    <div>
                        <h3 class="b i">Location</h3>
                    </div>
                    <div>
                        <h3 class="b i">Details</h3>
                    </div>
                    <div>
                        <h3 class="b i">RSVP</h3>
                    </div>
                </stellar-grid>
                <?php foreach ($events as $event): ?>
                    <?php content("preview", "event") ?>
                <?php endforeach; ?>
            </stellar-grid>
        <?php else: ?>
            <h1 class="tc">No upcoming events!</h1>
        <?php endif; ?>
    </stellar-content>

    <stellar-content for="events" id="past">
        <?php $events = get_posts([
            'posts_per_page' => -1,
            'post_type' => "event",
            'post_status' => 'publish',
            'meta_query'     => array(
                array(
                    'key'         => 'end_time',
                    'compare'     => '<=',
                    'value'       => $date_now,
                    'type'        => 'DATETIME'
                )
            )]); ?>
        <?php if ($events): ?>
            <stellar-grid class="relative z-2" align="items-<?php the_field('align') ?>" style="--grid-width:1fr; --grid-gap:0;">    
                <stellar-grid class="pa3 event-preview header" align="items-center">
                    <div>
                        <h3 class="b i">Date</h3>
                    </div>
                    <div>
                        <h3 class="b i">Location</h3>
                    </div>
                    <div>
                        <h3 class="b i">Details</h3>
                    </div>
                    <div>
                        <h3 class="b i">RSVP</h3>
                    </div>
                </stellar-grid>
                <?php foreach ($events as $event): ?>
                    <?php content("preview", "event") ?>
                <?php endforeach; ?>
            </stellar-grid>
        <?php else: ?>
            <h1 class="tc">No past events!</h1>
        <?php endif; ?>
    </stellar-content>

    <?php if (get_field("include_lead_out")): ?>
        <copy-wrap class="relative z-2" align="<?php the_field("lead_out_alignment") ?>">
            <?php the_field("lead_out"); ?>
        </copy-wrap>
    <?php endif; ?>

    <?php if (get_field("parallax")): ?>
        <?php component("starscape"); ?>
    <?php endif; ?>
</stellar-layout>
