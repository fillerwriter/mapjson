(function ($) {
  var mapJSONEngine = new MapJSON();
  $.getJSON('js/mapconfig.json', function(mapConfig) {
    $.getJSON('js/map.json', function(mapData) {
      mapJSONEngine.loadConfig(mapConfig);
      mapJSONEngine.render('map', mapData);
    });
  });
})(jQuery);