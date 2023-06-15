import { useState } from 'react';
import {
  Map ,
  Marker ,
  ViewPort 
} from '@parsimap/react-mapbox-gl';

function App() {

  const [viewPort, setViewPort] = useState<ViewPort>({
    zoom: 15,
    lng: 51.3957,
    lat: 35.7022,
  });


  return (
    <Map
      token={"p1c49eaeed1695494288832a5d61c482ec556c0664"}
      {...viewPort}
    >
      <Marker lngLat={[51.3957, 35.7022]} />
    </Map>
  );
}

export default App;