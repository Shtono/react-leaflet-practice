import { useState } from "react";
import { Grid, Box } from "grommet";
import MyMap from "./components/Map/MyMap";
import Newmap from "./components/Map/NewMap";
import UiButton from "./components/ui/Button";
import NavBar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import "./App.css";
import SidePanel from "./components/sidePanel/SidePanel";
import MapContextProvider from "./components/context/MapContext";

function App() {
  const [showMap, setShowMap] = useState(true);

  return (
    <div className='app'>
      <MapContextProvider>
        <Grid
          pad='none'
          rows={["auto", "auto"]}
          columns={[
            ["500px", "auto"],
            ["200px", "300px"],
          ]}
          gap='small'
          areas={[
            { name: "header", start: [0, 0], end: [1, 0] },
            { name: "map", start: [0, 1], end: [0, 1] },
            { name: "sidePanel", start: [1, 1], end: [1, 1] },
          ]}
        >
          <Box gridArea='header' background='brand'>
            <NavBar />
            <UiButton showMap={showMap} setShowMap={setShowMap} />
          </Box>
          <Box gridArea='map' background='light-5'>
            <MyMap showMap={showMap}></MyMap>
          </Box>
          <Box gridArea='sidePanel' background='light-2'>
            <SidePanel />
          </Box>
        </Grid>
        <Footer />
      </MapContextProvider>
      {/* <NewMap /> */}
    </div>
  );
}

export default App;

{
  /* <div className="app">
      <NavBar/>
      <UiButton showMap={showMap} setShowMap={setShowMap}/>    
      <MyMap showMap={showMap}>

      </MyMap>
      <Footer />
    </div> */
}
