<?php global $item; ?>
<?php global $nested; ?>
<stellar-google-maps apikey="AIzaSyDwDhY20PU4F89wF7xNQPZZgyjl0L7IwIw" lat="<?php echo $item["start_location"]["lat"]; ?>" lng="<?php echo $item["start_location"]["lng"]; ?>" zoom="<?php echo $item["start_location"]["zoom"]; ?>" block theme="retro-minimal" width="1600" height="600" gestureHandling="cooperative">
	<?php foreach ($item["markers"] as $marker): ?>
		<stellar-google-maps-marker address="<?php echo $marker["location"]["address"]; ?>" marker-title="<?php echo $marker["title"]; ?>" icon="<?php echo $marker["icon"]["url"]; ?>" icon-width="<?php echo $marker["icon"]["width"]/12; ?>" icon-height="<?php echo $marker["icon"]["height"]/12; ?>">
			<?php echo $marker["clickable_content"]; ?>
		</stellar-google-maps-marker>
	<?php endforeach; ?>
</stellar-google-maps>