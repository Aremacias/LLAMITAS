let mapa = L.map('mapa').setView([-0.246,-78.488],7);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(mapa);

$.getJSON("https://aremacias.github.io/LLAMITAS/TESIS.geojson",function(data){
  var clusteredPoints = L.markerClusterGroup();
var marker = L.geoJson(data,{
  onEachFeature: function (feature, layer){
    layer.bindPopup('<b>Titulo: </b>' + feature.properties.TITULO_TESIS_O_INVESTIGACION + '<br>\<b>Autor(es): </b>' + feature.properties.field_14 + '<br>\<b>Tutor(es): </b>' + feature.properties.field_19)
  }
    }, 
     );
  clusteredPoints.addLayer(marker);
  mapa.addLayer(clusteredPoints)
});

