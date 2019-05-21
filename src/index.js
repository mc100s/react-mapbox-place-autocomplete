import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'mapbox-gl/dist/mapbox-gl.css' // Import of Mapbox CSS
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

import * as serviceWorker from './serviceWorker';
mapboxgl.accessToken = 'pk.eyJ1IjoibWMxMDBzIiwiYSI6ImNqb2E2ZTF3ODBxa3czd2xldHp1Z2FxbGYifQ.U4oatm5RsTXXHQLz5w66dQ'
ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
