<?php

function get_recent_tweet_by_username($username = null) {
	if ($username):
		$transient_name = 'recent_tweet_' . $username;
		$tweet = get_transient($transient_name);

		if (!$tweet):
			$twitteruser = $username;

			$consumerkey = get_field('sdo_api_twitter_app_consumer_key', 'options');
			$consumersecret = get_field('sdo_api_twitter_app_consumer_secret', 'options');
			$accesstoken = get_field('sdo_api_twitter_app_access_token', 'options');
			$accesstokensecret = get_field('sdo_api_twitter_app_access_token_secret', 'options');

			$settings = array(
				'oauth_access_token' => $accesstoken,
				'oauth_access_token_secret' => $accesstokensecret,
				'consumer_key' => $consumerkey,
				'consumer_secret' => $consumersecret
			);

			$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

			$getfield = '?screen_name=' . $twitteruser
				. '&exclude_replies=true'
				. '&include_rts=false'
				. '&contributor_details=true'
				. '&include_entities=true';

			$requestMethod = 'GET';

			$twitter = new TwitterAPIExchange($settings);

			$tweet = $twitter->setGetfield($getfield)
				->buildOauth($url, $requestMethod)
				->performRequest();

				set_transient($transient_name, $tweet, 1 * HOUR_IN_SECONDS);
		endif;

		return $tweet;
	endif;
}

