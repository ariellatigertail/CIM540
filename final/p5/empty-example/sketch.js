const options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
}


const mappa = new Mappa('Leaflet');
let myMap;

let canvas;
let meteorites;

function setup() {
canvas = createCanvas(640, 580).parent('createContainer');

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);


  meteorites = loadTable('assets/data/Meteorite_Landings.csv', 'csv', 'header');


  myMap.onChange(drawMeteorites);

  fill(70, 203,31);
  stroke(100);
}

function draw() {}

function drawMeteorites() {
  clear();

  for (let i = 0; i < meteorites.getRowCount(); i++) {
    // Get the lat/lng of each meteorite
    const latitude = Number(meteorites.getString(i, 'reclat'));
    const longitude = Number(meteorites.getString(i, 'reclong'));


    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {

      const pos = myMap.latLngToPixel(latitude, longitude);

      let size = meteorites.getString(i, 'mass (g)');
      size = map(size, 558, 60000000, 1, 25) + myMap.zoom();
      ellipse(pos.x, pos.y, size, size);
    }
  }
}
