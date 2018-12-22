(function($){
		$(window).on('load', function(){
			$.instagramFeed({
				'username': 'blackmarkethairinc',
				'container': "#instagram-feed-demo",
				'display_profile': false,
				'display_biography': false,
				'display_gallery': true,
				'get_raw_json': false,
				'callback': null,
				'styling': true,
				'items': 6,
				'items_per_row': 3,
				'margin': 0 
			});
		});
	})(jQuery);
