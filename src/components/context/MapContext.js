import { createContext, useState } from "react";

export const MapContext = createContext();

const MapContextProvider = (props) => {
  const [polygonPoints, setPolygonPoints] = useState([]);
  const [confirmReset, setConfirmReset] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  const getCoordinates = (lat, lng) => {
    setPolygonPoints([...polygonPoints, [lat, lng]]);
  };
  const resetCoordinates = () => {
    setPolygonPoints([]);
  };
  return (
    <MapContext.Provider
      value={{
        getCoordinates,
        resetCoordinates,
        confirmReset,
        confirmSubmit,
        polygonPoints,
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;
