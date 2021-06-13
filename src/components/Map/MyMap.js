import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "./Map.css";
// import 'leaflet/dist/leaflet.css';
import { Box } from "grommet";
import GetCoordinates from "./GetCoordinates";
import { MapContext } from "../context/MapContext";
import { useContext } from "react";

const MyMap = (props) => {
  const { polygonPoints } = useContext(MapContext);
  console.log();
  const { showMap } = props;
  const polygon = [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
    [51.53, -0.12],
  ];
  const purpleOptions = { color: "blue" };
  if (!showMap) {
    return null;
  }
  return (
    <Box width='1500px' height='600px' margin='20px auto'>
      <MapContainer
        center={[42.136097, 24.742168]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {/* <Marker position={[1.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}

        {polygonPoints && (
          <Polygon pathOptions={purpleOptions} positions={polygonPoints} />
        )}

        <GetCoordinates />
      </MapContainer>
    </Box>
  );
};

export default MyMap;
// import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
// import './Map.css'
// // import 'leaflet/dist/leaflet.css';
// import { Box } from 'grommet';

// const MyMap = () => {
//   const polygon = [
//     [51.51, -0.12],
//     [51.51, -0.13],
//     [51.53, -0.13],
//     [51.53, -0.12],
//   ]
//   const purpleOptions = {color: 'blue'}
//   return (
//     <Box
//     width='1000px'
//     height='500px'
//     margin='20px auto'
//     >
//     <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[1.505, -0.09]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//       <Polygon pathOptions={purpleOptions} positions={polygon} />
//   </MapContainer>
//   </Box>
//    );
// }

// export default MyMap;
