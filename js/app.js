// var heatmapData = [];
// var polylineData = [];

var styles

var mapOptions = new google.maps.Map(document.getElementById('map'), {
	  center: new google.maps.LatLng(37.531960, -122.307609),
	  zoom: 15,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  styles: styles,
	});

$('select[name="map-type"]').change(function(){

    var isHidden = $('#hide-map').prop('checked');

    if (isHidden)
    	return false;

    if ($(this).val() == 'dark') {
  		console.log('dark');
  		map.setOptions({styles: darkMapStyles});

  	} else if ($(this).val() == 'standard') {
  		console.log('standard');
  		map.setOptions({styles: standardStyles});
  	};
});

$('#hide-map').change(function() {

	// console.log($(this).prop('checked'))
    if(this.checked) {
	    console.log('hidden')
	    map.setOptions({styles: hiddenStyles});
  	
  	} else {
  		var style = $('select[name="map-type"]').val()
  		console.log('standard');
  		map.setOptions({styles: style === 'dark' ? darkMapStyles : standardStyles});
  	};
});

map = new google.maps.Map(document.getElementById('map'), mapOptions);

$(function() {
  $('#loadButton').click(function(){

 	// 	// grab code, exchange it for token, and save token to local storage
		// var getQueryString = function (field, url) {
	 //  var href = url ? url : window.location.href;
	 //  var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	 //  var string = reg.exec(href);
	 //  return string ? string[1] : null;
		// };

		// var code = getQueryString('code');
		// console.log(code)

	  
		// $.ajax({
		//   url: 'http://www.strava.com/oauth/token',
		//   // dataType: 'json',
		//   // contentType: "application/json",
		//   // method: 'POST',
		//   type: "POST", crossDomain: true, 
		//   data: {
		// 		client_id: '13188',
		// 		client_secret: '6de6f93060596bfc9f46916c1b34327d94eae71f',
		// 		code: code, 
		//   },
		//   success: function(res) {
		//   	console.log(res);
		//   },

		//   error: function(error) {
		//   	console.log(error);
		//   }
		// });	

  	var activityDropdown = $('.activity-dropdown').val();
  	var mapDropdown = $('.map-dropdown').val();

  	$.ajax({
		  url: 'https://www.strava.com/api/v3/athlete/activities',
		  dataType: 'jsonp',
		  data: {
		  	per_page: '30',
				access_token: 'f22bb7b09c4feeac2deb43b1bbfeb95e699de968',
		  },
		  success: function(res) {
		  	res = activityDropdown === 'all' ? res : res.filter(function(d) {return d.type.toLowerCase() === activityDropdown});
		  	
		  	$.each(res, function(i, d) {

		  		var activity = [];

		  		$.ajax({
					  url: 'https://www.strava.com/api/v3/activities/'+ d.id +'/streams/latlng',
					  dataType: 'jsonp',
					  data: {
					  	resolution: 'high',
							access_token: 'f22bb7b09c4feeac2deb43b1bbfeb95e699de968',
					  },
					  success: function(res) {
					  	res = res[0].data;

				      $.each(res, function(i, d) {
				      	activity.push({lat: d[0], lng: d[1]});
				      });

				//heatmapData, 
				      drawHeatMap(activity);
					  }
					});
		  	});
		  }		  
		});	

		


		 // data points defined as an array of LatLng objects 
		// add heat, to argument for heatmap
		function drawHeatMap(poly) {
		



			// var heatmap = new google.maps.visualization.HeatmapLayer({
			//   data: heat
			// });

			// heatmap.setMap(mapOptions);

			// for (var i = 0; i < poly.length-1; i++) {
			// 	var polyline = new google.maps.Polyline({
			// 	path: [poly[i], poly[i+1]],
			// 	strokeColor: 'blue',
			// 	strokeOpacity: .5,
			// 	strokeWeight: 2,

			// 	});
			// }			

			var polyline = new google.maps.Polyline({
			  path: poly,
			  geodesic: true,
			  strokeColor: 'blue',
			  strokeOpacity: .5,
			  strokeWeight: 2
			});

			polyline.setMap(mapOptions);
		}
	})	
});




// f22bb7b09c4feeac2deb43b1bbfeb95e699de968