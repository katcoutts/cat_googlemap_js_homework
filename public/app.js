var initialize = function(){
  var container = document.getElementById('map');
  var center = { lat: 40.712784 , lng: -74.00594 };
  var map = new Map(container, center, 10);
  var contentString = "This is <b> New York </b>. It's a very big city in the US with lots of tall buildings."
  var contentString2 = "This is <b> Chicago</b>. It's another big city in the US. I think ER was set here."
  var center2 = {lat: 41.8781, lng: -87.6298}
  map.addMarker(center, contentString);
  map.addMarker(center2, contentString2);
  map.addClickEvent();
  var button = document.querySelector('button');
  button.onclick = map.resetCenter;
  var whereButton = document.querySelector('#where')
  whereButton.onclick = map.moveToLocation;
}



window.onload = initialize;
