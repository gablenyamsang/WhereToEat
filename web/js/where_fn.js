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
	$("#selected-restaurant").html("Seraching...");
	$.getJSON(config["api_path"]+"get_rand_restaurant.php", function(restaurant) {
		$("#selected-restaurant").html(restaurant["name"]);
    }); 
}
