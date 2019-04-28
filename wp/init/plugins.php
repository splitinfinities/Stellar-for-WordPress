<?php
require_once __DIR__ . '/../vendor/activate_plugins/class-tgm-plugin-activation.php';

/**
 * Register the required plugins for this theme.
 *
 * In this example, we register five plugins:
 * - one included with the TGMPA library
 * - two from an external source, one from an arbitrary source, one from a GitHub repository
 * - two from the .org repo, where one demonstrates the use of the `is_callable` argument
 *
 * The variable passed to tgmpa_register_plugins() should be an array of plugin
 * arrays.
 *
 * This function is hooked into tgmpa_init, which is fired within the
 * SPLITINFINITIES_Plugin_Activation class constructor.
 */
function splitinfinities_register_required_plugins() {
	/*
	 * Array of plugin arrays. Required keys are name and slug.
	 * If the source is NOT from the .org repo, then source is also required.
	 */
	$plugins = array(
		array(
			'name'               => 'Advanced Custom Fields Pro', // The plugin name.
			'slug'               => 'advanced-custom-fields-pro', // The plugin slug (typically the folder name).
			'source'             => 'http://connect.advancedcustomfields.com/index.php?p=pro&a=download&k=b3JkZXJfaWQ9MzQ1Mjl8dHlwZT1kZXZlbG9wZXJ8ZGF0ZT0yMDE0LTA3LTExIDIxOjQ1OjEz', // The plugin source.
			'required'           => true, // If false, the plugin is only 'recommended' instead of required.
			'force_activation'   => true, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
			'force_deactivation' => true, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins.
			'external_url'       => 'http://connect.advancedcustomfields.com/index.php?p=pro&a=download&k=b3JkZXJfaWQ9MzQ1Mjl8dHlwZT1kZXZlbG9wZXJ8ZGF0ZT0yMDE0LTA3LTExIDIxOjQ1OjEz', // If set, overrides default API URL and points to an external URL.
			'is_callable'        => 'acf_add_options_page', // If set, this callable will be be checked for availability to determine if a plugin is active.
		)
	);

	/*
	 * Array of configuration settings. Amend each line as needed.
	 *
	 * TGMPA will start providing localized text strings soon. If you already have translations of our standard
	 * strings available, please help us make TGMPA even better by giving us access to these translations or by
	 * sending in a pull-request with .po file(s) with the translations.
	 *
	 * Only uncomment the strings in the config array if you want to customize the strings.
	 */
	$message = 'Hey There! Thanks for using our theme.';

	$config = array(
		'id'           => 'split-infinities-theme',             // Unique ID for hashing notices for multiple instances of TGMPA.
		'default_path' => '',                           // Default absolute path to bundled plugins.
		'menu'         => 'split-infinities-install-plugins',   // Menu slug.
		'parent_slug'  => 'themes.php',                 // Parent menu slug.
		'capability'   => 'edit_theme_options',         // Capability needed to view plugin install page, should be a capability associated with the parent menu used.
		'has_notices'  => true,                         // Show admin notices or not.
		'dismissable'  => false,                        // If false, a user cannot dismiss the nag message.
		'dismiss_msg'  => '',                           // If 'dismissable' is false, this message will be output at top of nag.
		'is_automatic' => true,                         // Automatically activate plugins after installation or not.
		'message'      => $message,                     // Message to output right before the plugins table.
	);

	tgmpa( $plugins, $config );
}

add_action( 'tgmpa_register', 'splitinfinities_register_required_plugins' );
