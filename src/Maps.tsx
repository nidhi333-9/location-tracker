import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LatLngTuple } from "leaflet";

const defaultLatLng: LatLngTuple = [51.505, -0.09];
const zoom: number = 8;

const icon = L.icon({
  iconUrl: "./location.png",
  iconSize: [28, 38],
});

function ResetCenterView(props: any) {
  const { selectPosition } = props;
  const map = useMap();
  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectPosition]);

  return null;
}

// const position = [51.505, -0.09];
const Maps = (props: any) => {
  const { selectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
  return (
    <MapContainer
      center={defaultLatLng}
      zoom={zoom}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=Pw9xDDOiOrW3MEteIIIi"
      />

      {selectPosition && (
        <Marker
          position={locationSelection}
          icon={icon}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
};

export default Maps;
