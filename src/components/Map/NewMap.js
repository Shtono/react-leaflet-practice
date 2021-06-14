import { useState } from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
const Newmap = () => {
  const [mapLayers, setMapLayers] = useState([]);

  const _onCreated = (e) => {
    console.log(e);
    const { layerType, layer } = e;
    if (layerType === "polygon") {
      const { _leaflet_id } = layer;

      setMapLayers((layers) => [
        ...layers,
        { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
      ]);
    }
  };
  const _onEdited = () => {};
  const _onDeleted = () => {};

  return (
    <MapContainer center={center} zoom={zoom}>
      <FeatureGroup>
        <EditControl
          position='topright'
          onCreated={_onCreated}
          onEdited={_onEdited}
          onDeleted={_onDeleted}
          draw={{
            rectangle: false,
            polyline: false,
            circle: false,
            circlemarker: false,
            marker: false,
          }}
        ></EditControl>
      </FeatureGroup>
    </MapContainer>
  );
};

export default Newmap;
