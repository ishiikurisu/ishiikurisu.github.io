// PLACES DATA
// TODO move that to another files
let places = [
    {
        lat: -27.6032,
        lon: -48.4331,
        popup:"Florianópolis, Santa Catarina",
        status: "home"
    },
    {
        lat: -15.7468,
        lon: -47.8513,
        popup:"Brasília, Distrito Federal",
        status: "home"
    },
    {
        lat: -10.4424,
        lon: -49.1677,
        popup:"Pium, Tocantins",
        status: "visited"
    },

    {
        lat: -23.5630,
        lon: -46.6563,
        popup:"Sāo Paulo, Sāo Paulo (2016/02)",
        status: "visited"
    },
    {
        lat: -25.6950,
        lon: -54.4319,
        popup:"Foz do Iguaçú, Paraná (2016/10)",
        status: "visited"
    },
    {
        lat: -19.92296,
        lon: -43.94311,
        popup:"Belo Horizonte, Minas Gerais (2017/10)",
        status: "visited"
    },
    {
        lat: -22.9682,
        lon: -43.1779,
        popup:"Rio de Janeiro, Rio de Janeiro (2017/06)",
        status: "visited"
    },
    {
        lat: -17.7087,
        lon: -48.5924,
        popup:"Caldas Novas, Goiás (2018/03)",
        status: "visited"
    },
    {
        lat: -29.1062,
        lon: -51.5349,
        popup:"Bento Gonçalves, Rio Grande do Sul (2015/10)",
        status: "visited"
    },
    {
        lat: -12.9740,
        lon: -38.5104,
        popup:"Salvador, Bahia (2013/12)",
        status: "visited"
    },
    {
        lat: -7.1169,
        lon: -34.8087,
        popup:"Joāo Pessoa, Paraíba (2018/12)",
        status: "visited"
    },
    {
        lat: 36.7607,
        lon: 3.0676,
        popup:"الجزائر, الجزائر",
        status: "not visited"
    },
    {
        lat: 48.1707,
        lon: 11.5932,
        popup:"München, Deutschland",
        status: "not visited"
    },
    {
        lat: 55.68408,
        lon: 12.59281,
        popup:"København, Danmark",
        status: "not visited"
    },
    {
        lat: -34.9038420,
        lon: -56.1906122,
        popup:"Montevideo, Uruguay",
        status: "not visited"
    },
    {
        lat: 64.1538,
        lon: -21.9945,
        popup:"Reykjavík, Ísland",
        status: "not visited"
    },
    {
        lat: -36.8530,
        lon: 174.7192,
        popup:"Auckland, New Zealand",
        status: "not visited"
    },
    {
        lat: -33.8453,
        lon: 121.8278,
        popup:"Pink Lake, Australia",
        status: "not visited"
    },
    {
        lat: 42.09107,
        lon: -71.26408,
        popup:"Foxboro, USA",
        status: "not visited"
    },
    {
        lat: 30.6626,
        lon: 104.0633,
        popup:"Chengdu, China",
        status: "not visited"
    },
    {
        lat: 47.5820,
        lon: -52.6880,
        popup:"St John, Canada",
        status: "not visited"
    },
    {
        lat: -3.7173,
        lon: -38.4679,
        popup:"Fortaleza, Ceará",
        status: "not visited"
    },
    {
        lat: -25.38457,
        lon: -49.27614,
        popup:"Curitiba, Paraná",
        status: "visited"
    },
    {
        lat: -26.9183,
        lon: -49.0621,
        popup:"Blumenau, Santa Catarina",
        status: "not visited"
    },
    {
        lat: 34.9913,
        lon: 135.7263,
        popup:"京都、日本",
        status: "not visited"
    },
    {
        lat: 34.6776,
        lon: 135.4547,
        popup:"大阪、日本",
        status: "not visited"
    },
    {
        lat: 33.6749,
        lon: 130.3020,
        popup:"福岡、日本",
        status: "not visited"
    },
    {
        lat: 34.39318,
        lon: 132.45262,
        popup:"広島、日本",
        status: "not visited"
    },
    {
        lat: 36.56563,
        lon: 136.65956,
        popup:"金沢、日本",
        status: "not visited"
    },
    {
        lat: 28.4868,
        lon: 129.6414,
        popup:"奄美、日本<br/>Antipode to Florianópolis, SC",
        status: "not visited"
    },
    {
        lat: 35.6589796,
        lon: 139.6998435,
        popup:"東京、日本",
        status: "not visited"
    }
]

// MAPS
var mymap = L.map('mapid').setView([-18.156, -42.296], 6);
L.tileLayer('https://{s}.tiles.mapbox.com/v3/pinterest.map-ho21rkos/{z}/{x}/{y}.jpg', {
	maxZoom: 19,
	attribution: '&copy;'
}).addTo(mymap);

// ADD PLACES
var pins = {
    "home": L.AwesomeMarkers.icon({
        icon: 'home',
        markerColor: 'orange',
        iconColor: 'white',
        prefix: 'fa'
    }),
    "visited": L.AwesomeMarkers.icon({
        icon: 'calendar-check',
        markerColor: 'green',
        iconColor: 'white',
        prefix: 'fa'
    }),
    "not visited": L.AwesomeMarkers.icon({
        icon: 'calendar',
        markerColor: 'red',
        iconColor: 'white',
        prefix: 'fa'
    })
};
var limit = places.length;
for (var i = 0; i < places.length; i++) {
    var place = places[i];
    var marker = L.marker([place.lat, place.lon], {icon: pins[place.status]});
    marker.addTo(mymap);
    marker.bindPopup(place.popup);
}
