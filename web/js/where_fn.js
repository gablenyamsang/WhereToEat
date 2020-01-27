function list_restaurant() {
	$.getJSON(config["api_path"]+"get_restaurant_list.php", function(restaurant_list) {
		$("#tb-body-List-restaurant").empty();
		for(var i=0; i<restaurant_list.length; i++) {
			restaurant = restaurant_list[i];
			$("#tb-body-List-restaurant").append("<tr><td>"+restaurant["id"]+"</td><td>"+restaurant["name"]+"</td></tr>");
		}
    }); 
}

function rand_restaurant() {
	$.getJSON(config["api_path"]+"get_rand_restaurant.php", function(restaurant) {
		$("#tb-body-selected-restaurant").empty();
		$("#tb-body-selected-restaurant").append("<tr><td>"+restaurant["id"]+"</td><td>"+restaurant["name"]+"</td></tr>");
    }); 
}
