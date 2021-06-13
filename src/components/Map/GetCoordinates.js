import { useContext } from "react";
import { useMapEvents } from "react-leaflet";
import { MapContext } from "../context/MapContext";
const GetCoordinates = () => {
  const { getCoordinates } = useContext(MapContext);
  const map = useMapEvents({
    click: (e) => {
      getCoordinates(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
};

export default GetCoordinates;
