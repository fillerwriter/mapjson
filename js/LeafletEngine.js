function LeafletEngine() {
  this._mapObject = undefined;
}

LeafletEngine.prototype.render = function(config) {
  var mapObject = L.map(config.domID);
  if (config.init.lat != undefined && config.init.lon != undefined && config.init.zoom != undefined) {
    mapObject.setView([config.init.lat, config.init.lon], config.init.zoom, true);
  }

  this._mapObject = mapObject;
}

LeafletEngine.prototype.getMap = function() {
  return this._mapObject;
}