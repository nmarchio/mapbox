var mobile = document.documentElement.clientWidth <= 700;
                                                                                                 
mapboxgl.accessToken = 'pk.eyJ1Ijoibm1hcmNoaTAiLCJhIjoiY2p6dTljeDhiMGRwcjNubnl2aXI0OThhYyJ9.4FdGkBJlOXMPRugyqiXrjg';
window.map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/nmarchi0/ck0ms2hs24i4q1cqplaqbe0py", 
  center: [6.525479, 3.348520], // starting position
  zoom: 6,
  maxZoom: 15,
  minZoom: 1,
  hash: true
});

var sidebar = document.getElementById('sidebar');
if (!mobile) {
  window.map.addControl(new mapboxgl.NavigationControl());
  sidebar.className += " pin-bottomleft";
} else {
  window.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
}

map.on('zoomend', function() {
  var zoom = map.getZoom();
  if(zoom <= 10) {
    setSpeed(50);
  }
});

function flyHandler(id, options) {
  var button = document.getElementById(id);
  if(!button) return;
  button.addEventListener('click', function() {
    map.flyTo({
      center: options.center,
      zoom: options.zoom || 10
    });
    if (options.speed) {
      setSpeed(options.speed);
    }
  });
}

flyHandler('sierra-leone', {
  center: [8.480201, -13.250978],
  zoom: 10,
  speed: 500
});
flyHandler('liberia', {
  center: [6.328368, -10.806036],
  zoom: 10,
  speed: 500
});
flyHandler('haiti', {
  center: [18.538995, -72.336652],
  zoom: 10,
  speed: 500
});
flyHandler('nepal', {
  center: [27.699009, 85.344876],
  zoom: 10,
  speed: 500
});
