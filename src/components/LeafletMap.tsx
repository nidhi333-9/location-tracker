import React, { useContext } from "react";
import { LayerGroup, MapContainer, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { LayerContext } from "./context/LayerContext";

const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
const zoom: number = 8;
const { point } = useContext(LayerContext);

const LeafletMap: React.FC = () => {
  return (
    <>
      <MapContainer
        id="mapId"
        center={defaultLatLng}
        zoom={zoom}
      >
        <LayerGroup>{point}</LayerGroup>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
      </MapContainer>
    </>
  );
};

export default LeafletMap;
