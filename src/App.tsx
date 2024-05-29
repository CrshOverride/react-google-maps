import './App.css'

import { APIProvider, ControlPosition, Map, MapControl, useMapsLibrary } from '@vis.gl/react-google-maps'
import { useDrawingManager } from './useDrawingManager'
import { UndoRedoControl } from './UndoRedoControl'

function App() {
  let geocoder = undefined;
  const geocoding = useMapsLibrary("geocoding");
  if (geocoding) {
    geocoder = new geocoding.Geocoder();
  }
  
  const onMark = async (lat: number, long: number) => {
    console.log(`Lat: ${lat}, Long: ${long}`);
    if (!geocoder) {
      return;
    }
    
    var address = await geocoder.geocode({ location: { lat, lng: long }, language: "en-US" });
    console.log(address);
  };

  const drawingManager = useDrawingManager(null, onMark);
  
  return (
    <>
      <div id="main">
        <div>
          <p>Some text</p>
        </div>
        <div>
          <Map
            style={{width: '100vw', height: '100vh'}}
            defaultCenter={{lat: 22.54992, lng: 0}}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          />
          <MapControl position={ControlPosition.TOP_CENTER}>
            <UndoRedoControl drawingManager={drawingManager} />
          </MapControl>   
        </div>
      </div>
      
    </>
  )
}

export default App
