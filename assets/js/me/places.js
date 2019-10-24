var mymap = L.map('mapid').setView([-18.156, -42.296], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker([-18.156, -42.296]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
