var Map = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });

  // this.addMarker = function(coordinates){
  //   var marker = new google.maps.Marker({
  //     position: coordinates,
  //     map: this.googleMap,
  //     label: "2"
  //   });
  // }

  

  this.addMarker = function(coordinates, note) {
    var image = "http://icons.iconarchive.com/icons/fasticon/cat/32/Cat-Orange-icon.png";
    var info_window = new google.maps.InfoWindow({content: note});
      var marker = new google.maps.Marker({map: this.googleMap, position: coordinates, clickable: true, animation: google.maps.Animation.DROP, icon: image});
      if (note){
        marker.setIcon('http://icons.iconarchive.com/icons/fasticon/cat/48/Cat-Black-White-icon.png');
        marker.addListener('click', function() {
          info_window.open(map, marker);
         });}
      return marker;
  }


  this.addClickEvent = function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = { lat: event.latLng.lat() , lng: event.latLng.lng()};
      this.addMarker(position);
    }.bind(this))
  }


  this.resetCenter = function(){
    this.googleMap.setCenter( {lat: 41.8781, lng: -87.6298});
  }.bind(this);
 

 // NOT WORKING WHEN YOU HIT WHERE AM I BUTTON.

  // this.moveToLocation = function(){
  //   if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(function (position) {
  //           var initialLocation = {lat: position.coords.latitude, lng: position.coords.longitude};
  //           console.log(initialLocation);
  //           this.googleMap.setCenter(initialLocation);  
  //       });
  //   };
  // }.bind(this);

 this.moveToLocation = function(){
      if (navigator.geolocation) {

          navigator.geolocation.getCurrentPosition(function (position) {

              var pos = {lat: position.coords.latitude, lng: position.coords.longitude};
              console.log(pos);
              var marker = new google.maps.Marker({map: this.googleMap, position: pos, clickable: true, animation: google.maps.Animation.DROP});
              // Create a marker and center map on user location
              this.googlemap.setCenter(pos);
          });
      }
  
  }.bind(this)

  // this.moveToLocation = function(){
  // navigator.geolocation.getCurrentPosition(function(position) {
  //   this.googleMap.setCenter(position.coords.latitude, position.coords.longitude);
  // });
  // }.bind(this);

}

