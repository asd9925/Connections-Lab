//Initialize map
mapboxgl.accessToken = "pk.eyJ1IjoiYXNkOTkyNSIsImEiOiJjbWZ4aTM2cDIwYjgwMm1wamFzbHB4M3ZlIn0._duBKL05OpqHFWt1fN3RpA"
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/asd9925/cmfxjbt6l00at01qm97jr2mbo",
    center: [-87,25],
    zoom: 3.1
});
//Add sightings geoJSON layer
map.on('load', () => {
    map.addSource('sightings', {
        type: 'geojson',
        data: 'sightings.geojson'
    });

    console.log("GeoJSON loaded!");

    map.addLayer({
        id: "sightings", 
        type: "circle", 
        source: "sightings",
        paint: {
            'circle-radius': 6,
            //'circle-color': '#ff0000'
        }
    });
});

//Add click event (e)
map.on('click', 'sightings', (e) => {
    console.log("A data point was clicked");
});