// PLACES DATA
// TODO move that to another files
let places = [
    {
        x: -27.6032,
        y: -48.4331,
        popup:"Florianópolis, Santa Catarina",
        status: "home"
    },
    {
        x: -15.7468,
        y: -47.8513,
        popup:"Brasília, Distrito Federal",
        status: "home"
    },
    {
        x: -23.5630,
        y: -46.6563,
        popup:"Sāo Paulo, Sāo Paulo (2016/02)",
        status: "visited"
    },
    {
        x: -25.6950,
        y: -54.4319,
        popup:"Foz do Iguaçú, Paraná (2016/10)",
        status: "visited"
    },
    {
        x: -19.92296,
        y: -43.94311,
        popup:"Belo Horizonte, Minas Gerais (2017/10)",
        status: "visited"
    },
    {
        x: -22.9682,
        y: -43.1779,
        popup:"Rio de Janeiro, Rio de Janeiro (2017/06)",
        status: "visited"
    },
    {
        x: -17.7087,
        y: -48.5924,
        popup:"Caldas Novas, Goiás (2018/03)",
        status: "visited"
    },
    {
        x: -29.1062,
        y: -51.5349,
        popup:"Bento Gonçalves, Rio Grande do Sul (2015/10)",
        status: "visited"
    },
    {
        x: -12.9740,
        y: -38.5104,
        popup:"Salvador, Bahia (2013/12)",
        status: "visited"
    },
    {
        x: -7.1169,
        y: -34.8087,
        popup:"Joāo Pessoa, Paraíba (2018/12)",
        status: "visited"
    },
    {
        x: 36.7607,
        y: 3.0676,
        popup:"الجزائر, الجزائر",
        status: "not visited"
    },
    {
        x: 48.1707,
        y: 11.5932,
        popup:"München, Deutschland",
        status: "not visited"
    },
    {
        x: -34.9038420,
        y: -56.1906122,
        popup:"Montevideo, Uruguay",
        status: "not visited"
    },
    {
        x: 64.1538,
        y: -21.9945,
        popup:"Reykjavík, Ísland",
        status: "not visited"
    },
    {
        x: -36.8530,
        y: 174.7192,
        popup:"Auckland, New Zealand",
        status: "not visited"
    },
    {
        x: 35.6589796,
        y: 139.6998435,
        popup:"東京、日本",
        status: "not visited"
    }
]

// other places
/*
    pink beach, australia
    foxboro, usa
    san fran, usa
    chengdu, china
    danmark
    fukuoka, hiroshima, osaka, kyoto
    nintendo shop @ nyc, usa
    fairbanks, alaska
    st john, canada
    fortaleza, ceará
    Antarctica
*/

// MAPS
var mymap = L.map('mapid').setView([-18.156, -42.296], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
    var marker = L.marker([place.x, place.y], {icon: pins[place.status]});
    marker.addTo(mymap);
    marker.bindPopup(place.popup);
}
