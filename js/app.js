// function getRequest() {
  // var params = {

  // };

  // var heatmapData = [];
  var polylineData = [];


$('#authButton').click(function(){

 });

	// $(function() {
	//   $('#auth-button').submit(function(event){
	//     var searchTerm = $('#query').val();
	//     getRequest(searchTerm);
	//   });
	// });

$(function() {
  $('#loadButton').click(function(){

 		// grab code, exchange it for tokem, and save token to local storage
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
		// 		access_token: access_token,
		//   },
		//   success: function(res) {
		//   	res = dropdown === 'all' ? res : res.filter(function(d) {return d.type.toLowerCase() === dropdown});
		  	
		//   	$.each(res, function(i, d) {
		//   		$.ajax({
		// 			  url: 'https://www.strava.com/api/v3/activities/'+ d.id +'/streams/latlng',
		// 			  dataType: 'jsonp',
		// 			  data: {
		// 			  	resolution: 'high',
		// 					access_token: access_token,
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


		// /* data points defined as an array of LatLng objects */
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

// var trackCoordinates = [
//   {lat: 37.772, lng: -122.214},
//   {lat: 21.291, lng: -157.821},
//   {lat: -18.142, lng: 178.431},
//   {lat: -27.467, lng: 153.027}
// ];


// }

// f22bb7b09c4feeac2deb43b1bbfeb95e699de968