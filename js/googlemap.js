function init() {
    var Guinness Open Gate Brewery = new google.maps.LatLng(53.343559945352546, -6.286999249211779);
    var mapOptions = {
        zoom: 13,
        center: Guinness Open Gate Brewery,
		mapTypeId: 'satellite'
		};
		
    var Map = new google.maps.Map(el, mapOptions);

    var marker = new google.maps.Marker({
        position: Guinness Open Gate Brewery,
        map: Map,
        title: "Guinness Open Gate Brewery",
        animation: google.maps.Animation.BOUNCE,
        icon: 'images/bottle.png'

    });

    var contentString = '<h1>Guinness Open Gate Brewery</h1><p>This is one of the places I would like to go when I visit Ireland, the original brewery of one of my favorite stout beer Guinness! The rich smooth fullbodied taste of a pint in one hand and a fork of shepards pie in the other, cheers!</p>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(myMap, marker);
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