// PLACES DATA
// TODO move that to another files
let places = [
    {
        x: -15.7468,
        y: -47.8513,
        popup:"Brasília, Distrito Federal (2019/05)"
    },
    {
        x: -23.5630,
        y: -46.6563,
        popup:"Sāo Paulo, Sāo Paulo (2016/02)"
    },
    {
        x: -25.6950,
        y: -54.4319,
        popup:"Foz do Iguaçú, Paraná (2016/10)"
    },
    {
        x: -19.92296,
        y: -43.94311,
        popup:"Belo Horizonte, Minas Gerais (2017/10)"
    },
    {
        x: -22.9682,
        y: -43.1779,
        popup:"Rio de Janeiro, Rio de Janeiro (2017/06)"
    },
    {
        x: -17.7087,
        y: -48.5924,
        popup:"Caldas Novas, Goiás (2018/03)"
    },
    {
        x: -29.1062,
        y: -51.5349,
        popup:"Bento Gonçalves, Rio Grande do Sul (2015/10)"
    },
    {
        x: -12.9740,
        y: -38.5104,
        popup:"Salvador, Bahia (2013/12)"
    },
    {
        x: -7.1169,
        y: -34.8087,
        popup:"Joāo Pessoa, Paraíba (2018/12)"
    }
]

// MAPS
var mymap = L.map('mapid').setView([-18.156, -42.296], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// ADD PLACES
var pin = L.AwesomeMarkers.icon({
    icon: 'calendar-check',
    markerColor: 'green',
    iconColor: 'white',
    prefix: 'fa'
});
var limit = places.length;
for (var i = 0; i < places.length; i++) {
    var place = places[i];
    var marker = L.marker([place.x, place.y], {icon: pin});
    marker.addTo(mymap);
    marker.bindPopup(place.popup);
}
