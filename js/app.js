// var heatmapData = [];
var polylineData = [];


$(function() {
  $('#loadButton').click(function(){

 		grab code, exchange it for token, and save token to local storage
		var getQueryString = function (field, url) {
	  var href = url ? url : window.location.href;
	  var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	  var string = reg.exec(href);
	  return string ? string[1] : null;
		};

		var code = getQueryString('code');
		console.log(code)

	  
		$.ajax({
				  url: 'https://www.strava.com/oauth/token',
				  dataType: 'jsonp',
				  data: {
						client_id: '13188',
						client_secret: '6de6f93060596bfc9f46916c1b34327d94eae71f',
						code: code, 
				  },
				  success: function(res) {
				  	console.log(res)
				  }
		});	

  // 	var dropdown = $('.dropdown').val();

  // 	$.ajax({
		//   url: 'https://www.strava.com/api/v3/athlete/activities',
		//   dataType: 'jsonp',
		//   data: {
		// 		access_token: 'f22bb7b09c4feeac2deb43b1bbfeb95e699de968',
		//   },
		//   success: function(res) {
		//   	res = dropdown === 'all' ? res : res.filter(function(d) {return d.type.toLowerCase() === dropdown});
		  	
		//   	$.each(res, function(i, d) {
		//   		$.ajax({
		// 			  url: 'https://www.strava.com/api/v3/activities/'+ d.id +'/streams/latlng',
		// 			  dataType: 'jsonp',
		// 			  data: {
		// 			  	resolution: 'high',
		// 					access_token: 'f22bb7b09c4feeac2deb43b1bbfeb95e699de968',
		// 			  },
		// 			  success: function(res) {
		// 			  	res = res[0].data;

		// 		      $.each(res, function(i, d) {
		// 		      	polylineData.push({lat: d[0], lng: d[1]});
		// 		      });

		// 		//heatmapData, 
		// 		      drawHeatMap(polylineData);
		// 			  }
		// 			});
		//   	});
		//   }		  
		// });	


		//  data points defined as an array of LatLng objects 
		// // add heat, to argument for heatmap
		// function drawHeatMap(poly) {
		// 	var mapOptions = new google.maps.Map(document.getElementById('map'), {
		// 	  center: new google.maps.LatLng(37.531960, -122.307609),
		// 	  zoom: 15,
		// 	  mapTypeId: google.maps.MapTypeId.ROADMAP
		// 	});

		// 	new google.maps.Map(document.getElementById('map'), mapOptions);



		// 	// var heatmap = new google.maps.visualization.HeatmapLayer({
		// 	//   data: heat
		// 	// });

		// 	// heatmap.setMap(mapOptions);

		// 	// for (var i = 0; i < poly.length-1; i++) {
		// 	// 	var polyline = new google.maps.Polyline({
		// 	// 	path: [poly[i], poly[i+1]],
		// 	// 	strokeColor: 'blue',
		// 	// 	strokeOpacity: .5,
		// 	// 	strokeWeight: 2,

		// 	// 	});
		// 	// }			

		// 	var polyline = new google.maps.Polyline({
		// 	  path: poly,
		// 	  geodesic: true,
		// 	  strokeColor: 'blue',
		// 	  strokeOpacity: .5,
		// 	  strokeWeight: 2
		// 	});

		// 	polyline.setMap(mapOptions);
		// }
	})	
});




// f22bb7b09c4feeac2deb43b1bbfeb95e699de968