import express from 'express';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});


// mapboxgl.accessToken = MAPBOX_API_KEY;

// const map = new mapboxgl.Map({
//     container: 'map',
//     center: [-121,37.5], // starting position [longitude, latitude]
//     zoom: 9 // starting zoom distance
// });