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

//Add click event (e)
map.on('click', 'sightings', (e) => {
    console.log("A data point was clicked");
    console.log(e.features[0].properties); //Log data to console

//Get the feature that was clicked/access array of all map features at click location
//Feature holds all data of each point
const feature = e.features[0];

//HTML for popup
const popupHtml = `
        <h3>${feature.properties.Date}</h3> 
        <p><strong>Location:</strong> ${feature.properties.Location}</p>
        <p>${feature.properties.Details}</p>
    `;

//Create map box popup
new mapboxgl.Popup()
//Set popup location (appears exactly on clicked point)
    .setLngLat(feature.geometry.coordinates)
    //Add HTML for Mapbox to use as content in popup
      .setHTML(popupHtml)
      //Show popup on the map
      .addTo(map);

      });
      });