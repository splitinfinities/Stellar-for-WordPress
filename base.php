<?php

use SPLITINFINITIES\Setup;
use SPLITINFINITIES\Wrapper;
use Carbon\Carbon as Carbon;

// Sets up SENDO
global $sendo;
global $wp_query;
$content_transient = false;
$sendo_transient = false;

// If caching is enabled
if (get_field('enable_caching', 'option')) {

	$cached_time = Carbon::today();

	// Sets up this page's cache.
	// Be warned! If a query string exists, it doesn't consider that
	// in the cache - so you could be served duplicate content.
	$the_path_for_the_transient = strtok($_SERVER["REQUEST_URI"],'?');

	// Always store the 404 in a specific transient, so we don't clog the DB/Object Cache
	if (is_404()) {
		$the_path_for_the_transient = '404';
	}

	$content_transient = get_transient( md5( $the_path_for_the_transient ) . '_content_' . $cached_time->timestamp );
	$sendo_transient = get_transient( md5( $the_path_for_the_transient ) . '_sendo_' . $cached_time->timestamp );
}

// TODO: Move this to a function
// If the caches are set, and the user isn't logged in,
// Set the $content variable and $sendo variable from the cache.
if ( $content_transient && $sendo_transient && !is_user_logged_in( ) ) {
	$content = $content_transient;
	$sendo = $sendo_transient;
} else {
	// Make an empty array for this page's keywords
	$keywords = [];

	if (get_field('seo_page_keywords', 'option')  || get_field('seo_page_keywords'))  {
		$page_keywords = (gettype(get_field('seo_page_keywords')) === "array" && count(get_field('seo_page_keywords')) > 0) ? get_field('seo_page_keywords') : false;

		$keywords_to_get = (count($page_keywords) > 0) ? $page_keywords : get_field('seo_page_keywords', 'option');

		if (count($keywords_to_get) > 0) {
			foreach ($keywords_to_get as $key => $value) {
				$keywords[] = $value['keyword'];
			}
		}
	}

	$page_title = ( get_field( 'seo_page_title' ) ) ? get_field('seo_page_title') : get_field('seo_page_title', 'option');
	$page_title = $sendo->page_title_treatment($page_title);

	$color = get_field('brand_site_theme', 'options');

	$sendo->init(array(
		'title' => $page_title,
		'description' => ( get_field( 'seo_page_description' ) ) ? get_field('seo_page_description') : get_field('seo_page_description', 'option'),
		'image' => ( get_field( 'sdo_social_image' ) ) ? get_field('sdo_social_image') : get_field('sdo_social_image', 'option'),
		'url' =>  get_permalink(),
		'color' => $color,
		'tags' => $keywords )
	);

	ob_start();
	include Wrapper\template_path();
	$content = ob_get_clean();
	$content = new WP_HTML_Compression($content);

	if ( get_field('enable_caching', 'option') ) {
		if ( ! is_user_logged_in( ) ) {
			set_transient( md5( $the_path_for_the_transient ) . '_content_' . $cached_time->timestamp, $content, 12 * HOUR_IN_SECONDS);
			set_transient( md5( $the_path_for_the_transient ) . '_sendo_' . $cached_time->timestamp, $sendo, 12 * HOUR_IN_SECONDS);
		} else {
			delete_transient( md5( $the_path_for_the_transient ) . '_content_' . $cached_time->timestamp);
			delete_transient( md5( $the_path_for_the_transient ) . '_sendo_' . $cached_time->timestamp);
		}
	}
}

// Capture the page in memory
ob_start(); ?>
<!doctype html>
<html class="no-js <?php the_field('color_mode') ?>" <?php language_attributes(); ?>>
<head>
	<?php $sendo->output('meta'); ?>

	<?php
	// Removes WordPress's title from the wp_head code.
	// TODO: Move this to a function
	ob_start();
	wp_head();
	$wordpress_head = ob_get_clean();
	$wordpress_head = preg_replace('/<title\b[^>]*>(.*?)<\/title>/i', '', $wordpress_head);
	echo $wordpress_head;
	?>

	<style data-styles>stellar-docs-component,stellar-docs-page,stellar-docs-home,stellar-tester,stellar-interview,stellar-playlist,stellar-pagination,stellar-stripe,stellar-video-interview,stellar-asset-library,stellar-color-library,stellar-toggle-option,stellar-breadcrumbs,stellar-360-image,stellar-documentation,stellar-clock,stellar-dropdown,stellar-group,stellar-switch,stellar-toggle,stellar-password-requirements,stellar-song,stellar-step,stellar-table,skeleton-text,stellar-animate-text,stellar-callout,stellar-comment,stellar-image,stellar-long-shadow,stellar-reveal,stellar-reveal-list,horizontal-scroll,ion-icon,stellar-360-video,stellar-auto-scroll,stellar-comments,stellar-context,stellar-docs-not-found,stellar-follow,stellar-interview-line,stellar-keyframes,stellar-mouse-trail,stellar-pjax,stellar-scatter,stellar-scroll-z-root,stellar-scroll-z-section,stellar-steps,stellar-story,stellar-time,stencil-async-content,stencil-route-title,stencil-router-prompt,stencil-router-redirect,web-audio-debugger,web-audio-effect,web-audio-sequencer,web-audio-visualizer-shader,stellar-avatar,stellar-group-overflow,stellar-breadcrumb,stellar-color-picker,stellar-video,stellar-code,stellar-theme,stellar-form,stellar-chart,web-audio,web-audio-source,stellar-tab,stellar-tabs,stellar-content,stencil-route,stencil-route-switch,stencil-router,stellar-tag,stellar-grid,stellar-intersection,stellar-slides,stellar-simple-slides,stellar-slide,stellar-card,stellar-blur,stellar-button,stencil-route-link,stellar-asset,stellar-icon,context-consumer,stellar-select,stellar-layout,stellar-parallax,stellar-parallax-section,stellar-item,stellar-accordion,stellar-message,stellar-starscape,stellar-label,copy-wrap,stellar-tooltip,stellar-input,stellar-unit,stellar-markdown,stellar-docs-header,stellar-docs-navigation,stellar-progress,web-audio-visualizer,skeleton-img{visibility:hidden}.hydrated{visibility:inherit}</style>

	<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/style.css?v=1.2">
</head>
<body <?php body_class("bg-white dm-bg-black"); ?> data-section="top">
	<stellar-theme system body base="<?php echo str_replace("theme-", "", get_field('theme')) ?>" complement="<?php echo str_replace("complement-", "", get_field('complement')) ?>"></stellar-theme>
	<?php if (get_field('enable_ajax', 'option')): ?>
		<stellar-pjax></stellar-pjax>
	<?php endif; ?>

	<?php if ($sendo->chrome_shown): ?>
		<?php get_template_part('header'); ?>
	<?php endif; ?>

	<?php if ( get_field("features", "options") && in_array("interstitial", get_field("features", "options"))): ?>
		<stellar-interstitial fullscreen>
			<stellar-form ajax class="self-center relative z-2" style="height: auto;">
				<copy-wrap>
					<?php the_field("interstitial_content", "options") ?>
					<stellar-group class="items-center flex mt4 bg-black">
						<stellar-button tag="submit" class="mr4">Continue</stellar-button>
						<p class="white" style="height: auto;align-self: center;">or close this site.</p>
					</stellar-group>
				</copy-wrap>
			</stellar-form>
			<?php component("starscape"); ?>
		</stellar-interstitial>
	<?php endif; ?>

	<main>
		<?php echo $content; ?>
	</main>

	<?php if ($sendo->chrome_shown): ?>
		<?php get_template_part('footer'); ?>
	<?php endif; ?>

	<?php $sendo->output('prepend_captured_scripts'); ?>
	<?php wp_footer(); ?>
	<?php $sendo->output('scripts'); ?>
	<?php $sendo->output('append_captured_scripts'); ?>
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', '<?php echo GOOGLE_ANALYTICS_ID; ?>', 'auto');
		ga('send', 'pageview');
	</script>
	<script>
		document.addEventListener("pjax:success", (e, a, b) => {
			var temp = document.createElement("html");
			temp.innerHTML = e.request.response;
			document.querySelector("body").classList = temp.querySelector("body").classList;
			document.querySelector("stellar-theme").base = temp.querySelector("stellar-theme").base;
			document.querySelector("stellar-theme").complement = temp.querySelector("stellar-theme").complement;
			document.querySelector(".post-edit-link").href = temp.querySelector(".post-edit-link").href;
		})
	</script>
	<script>
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
			document.querySelector('stellar-theme').dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		})
	</script>
	<script>
		// IE/Edge: 11, ff/opera/chrome:older than 6 months, safari: older than 9
		var $buoop = {vs:{i:11,f:-4,o:-4,s:9,c:-4},unsecure:true,api:4};
		function $buo_f(){
			var e = document.createElement("script");
			e.src = "//browser-update.org/update.js";
			document.body.appendChild(e);
		};
		try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
		catch(e){window.attachEvent("onload", $buo_f)}
	</script>
	<script>
		console.debug('MYSQL: <?php echo get_num_queries(); ?> queries in <?php timer_stop(1); ?> seconds.');

		console.debug('PHP/MySQL: <?php echo ( get_field( 'enable_caching', 'option' ) ) ? 'Caching is enabled' : 'Caching is disabled'; ?>');

		;(function css_performance() {
			window.onload = function() {
				setTimeout(function() {
					var t = performance.timing;
					console.debug("JS/CSS: TTI is " + (t.loadEventEnd - t.responseEnd) + " milliseconds");
				}, 0);
			};
		})();
	</script>
<?php $this_full_page = ob_get_clean(); ?>
<?php $this_full_page = new WP_HTML_Compression($this_full_page); ?>
<?php echo $this_full_page; ?></body></html>
