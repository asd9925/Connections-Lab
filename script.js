//Initialize map
mapboxgl.accessToken = "pk.eyJ1IjoiYXNkOTkyNSIsImEiOiJjbWZ4aTM2cDIwYjgwMm1wamFzbHB4M3ZlIn0._duBKL05OpqHFWt1fN3RpA"
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/asd9925/cmfxjbt6l00at01qm97jr2mbo",
    center: [-110,35],
    zoom: 3.5
});
//Add sightings geoJSON layer
map.on('load', () => {
    map.addSource('sightings', {
        type: 'geojson',
        data: 'sightings.geojson'
    });
    map.addLayer({
        id: "sightings", 
        type: "circle", 
        source: "sightings",
        paint: {
            'circle-radius': 10,
            //'circle-color': '#ff0000'
        }
    });
});