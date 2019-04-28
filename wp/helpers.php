<?php

/**
 * component - Load component partials without dealing with writing the directory
 */
function component( $slug, $name = null ) {
	get_template_part('components/' . $slug, $name);
}

/**
 * block - Load block partials without dealing with writing the directory
 */
function block( $slug, $name = null ) {
	get_template_part('blocks/' . $slug, $name);
}

/**
 * Turns an array to a string
 */
function array_to_html_attributes($array) {
	$ff = true;
	$sep = "=";
	$out = "";

	foreach($array as $key => $val) {
		if ($key) {
			$out .= $key . '="' . $val .'" ';
		}
	}

	return $out;
}

/**
 * Make a full url relative
 */
function make_href_root_relative($input) {
	return preg_replace('!http(s)?://' . $_SERVER['SERVER_NAME'] . '/!', '/', $input);
}
