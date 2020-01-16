<?php 
use Carbon\Carbon;

function has_recent_instagram_post ($username = null) {
	try {
		$api = new Instagram\Api();
		$api->setUserName($username);

		$feed = $api->getFeed();

		$post = $feed->medias[0];

		if (!$post) {
			throw new Exception("Looks like this user hasn't posted yet!");
		}

		$date = Carbon::instance($post->date);
		$fromDate = Carbon::now();

		return ($fromDate->diffInDays($date) >= 7);
	} catch (Exception $error) {
		echo "<!--".$error->getMessage()."-->";
	}
}

function has_instagram_posts ($username = null) {
	$api = new Instagram\Api();
	$api->setUserName($username);

	$feed = $api->getFeed();

	$post = $feed->medias[0];

	return ($post !== null);
}

function get_recent_instagram_post_by_username($username = null) {
	try {
		if ($username):
			$transient_name = 'recent_insta_post_' . $username;

			$post = get_transient($transient_name);

			if (!$post):
				$api = new Instagram\Api();
				$api->setUserName($username);

				$feed = $api->getFeed();

				$post = $feed->medias[0];

				set_transient($transient_name, $post, 1 * HOUR_IN_SECONDS);
			endif;

			if (!$post) {
				throw new Exception("Looks like this user hasn't posted yet!");
			}

			return $post;
		endif;
	} catch (Exception $error) {
		echo $error->getMessage();
	}
}

function get_instagram_feed_by_username($username = null) {
	if ($username):
		$transient_name = 'recent_insta_feed_' . $username;

		$posts = get_transient($transient_name);

		if (!$posts):
			$api = new Instagram\Api();
			$api->setUserName($username);

			$feed = $api->getFeed();
			$posts = $feed->medias;

			set_transient($transient_name, $posts, 1 * HOUR_IN_SECONDS);
		endif;

		return $posts;
	endif;
}

function getInstagramCodeFromId($id) {
	$parts = explode('_', $id);
	$id = $parts[0];
	$alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
	$shortenedId = '';
	while ($id > 0) {
		$remainder = $id % 64;
		$id = ($id - $remainder) / 64;
		$shortenedId = $alphabet{$remainder} . $shortenedId;
	};
	return $shortenedId;
}

function get_instagram_video_details($id) {
	$code = getInstagramCodeFromId($id);
	$url = "https://www.instagram.com/p/$code/?__a=1";
	$json = file_get_contents($url);
	$obj = json_decode($json);
	return $obj->graphql->shortcode_media;
}

function show_recent_instagram_post_by_username ($username = null) {
	$post = get_recent_instagram_post_by_username($username);
	echo insta_post_to_smart_image($post);
}

function show_instagram_feed_by_username($username = null, $before = "", $after = "") {
	$feed = get_instagram_feed_by_username($username);

	foreach ($feed as $post):
		echo $before;
		echo "<a href='$post->link' target='_blank' rel='noopener'>";
		if ($post->video):
			echo instagram_post_to_video($post);
		else:
			echo instagram_post_to_smart_image($post);
		endif;
		echo "</a>";
		echo $after;
	endforeach;
}

function instagram_post_to_smart_image($instagram) {
	$post = "<stellar-image poster='$instagram->thumbnailSrc' width='$instagram->width' height='$instagram->height' block nozoom>";

	foreach (array_reverse($instagram->thumbnails) as $thumbnail):
		$post .= '<source srcset="' . $thumbnail->src . '" media="(min-width:' . ($thumbnail->config_width * 1.5) . 'px)">';
	endforeach;

	$post .= "</stellar-image>";

	return $post;
}

function instagram_post_to_video($instagram) {
	$result = get_instagram_video_details($instagram->id);

	$post = "<stellar-video poster='$instagram->thumbnailSrc' autoplay width='$instagram->width' height='$instagram->height' controls='false' playsinline muted>";

	foreach (array_reverse($instagram->thumbnails) as $thumbnail):
		$post .= '<source src="' . $result->video_url . '" media="(min-width:' . ($thumbnail->config_width * 1.5) . 'px)">';
	endforeach;

	$post .= "</stellar-video>";

	return $post;
}