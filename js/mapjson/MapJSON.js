function MapJSON() {
  this.config = 'default';
}

MapJSON.prototype.loadConfig = function(configData) {
  this.config = configData;
}

MapJSON.prototype.render = function(domID, mapData) {
  var engineObjectName = this.config[mapData.engine.name].class;
  var engine = new window[engineObjectName]();
  var engineConfig = {
    domID: domID,
    init: mapData.engine.init
  };
  engine.render(engineConfig);

  for (var i in mapData.layers) {
    var layerPluginObjectName = this.config[mapData.layers[i].name].class;
    var tileLayer = new window[layerPluginObjectName]();
    tileLayer.render(engine.getMap(), mapData.layers[i].options);
  }
}