import './App.css'

import { APIProvider, ControlPosition, Map, MapControl } from '@vis.gl/react-google-maps'
import { useDrawingManager } from './useDrawingManager'
import { UndoRedoControl } from './UndoRedoControl'

function App() {
  const onMark = (lat: number, long: number) => {
    console.log(`Lat: ${lat}, Long: ${long}`);
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
