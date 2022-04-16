function initMap() {
    // centered map at Guinness brewery in dublin
    const Guinness Open Gate Brewery = {lat: 53.343559945352546, lng: -6.286999249211779};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: Guinness Open Gate Brewery,
		mapTypeId: 'satellite'
		});
		
    var myMap = new google.maps.Map(el, mapOptions);

    var marker = new google.maps.Marker({
        position: myLocation,
        map: myMap,
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