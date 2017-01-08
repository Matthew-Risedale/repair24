var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.954775, lng: 30.322626},
    zoom: 11,
    streetViewControl: false,
    mapTypeControl: false,
  });


  var pinIcon = {
    url: 'assets/img/green-pin.png',
    scaledSize: new google.maps.Size(20, 30), // scaled size
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0),
  };

  var locations = [
  ['first', 59.941988, 30.235383],
  ['second', 59.998473, 30.263636],
  ['third', 59.960553, 30.308885],
  ['fourth', 59.930673, 30.320828],
  ['fifth', 59.922792, 30.2512511],
  ['sixth', 59.960911, 30.358500],
  ['seventh', 59.925906, 30.358232]

];

var marker, i;

   for (i = 0; i < locations.length; i++) {
     marker = new google.maps.Marker({
       position: new google.maps.LatLng(locations[i][1], locations[i][2]),
       icon: pinIcon,
       map: map
     });
}




    var styles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

  map.setOptions({styles: styles});
}
