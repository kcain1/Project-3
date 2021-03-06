function init() {
    var GuinnessOpenGateBrewery = new google.maps.LatLng(53.343559945352546, -6.286999249211779);
    var mapOp = {
        zoom: 13,
        center: GuinnessOpenGateBrewery,
		mapTypeId: 'satellite'
		};
		
    var Map = new google.maps.Map(mapOp);

    var marker = new google.maps.Marker({
        position: GuinnessOpenGateBrewery,
        map: Map,
        title: "Guinness Open Gate Brewery",
        animation: google.maps.Animation.BOUNCE,
        icon: 'images/bottle.png'

    });

    var conString = '<h1>Guinness Open Gate Brewery</h1><p>This is one of the places I would like to go when I visit Ireland, the original brewery of one of my favorite stout beer Guinness! The rich smooth fullbodied taste of a pint in one hand and a fork of shepards pie in the other, cheers!</p>';
    var infowindow = new google.maps.InfoWindow({
        content: conString
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(Map, marker);
    });

    marker.addListener("click", toggleBounce);

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

}



google.maps.event.addDomListener(window, 'load', init);