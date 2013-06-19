function LeafletTileLayer() {

}

LeafletTileLayer.prototype.render = function(mapObject, configOptions) {
  L.tileLayer(configOptions.tileURI, {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapObject);
}
