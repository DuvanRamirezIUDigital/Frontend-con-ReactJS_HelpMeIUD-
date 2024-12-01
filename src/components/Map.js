import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ cases }) => {
  return (
    <MapContainer center={[4.60971, -74.08175]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cases.map((caseItem, index) => (
        <Marker key={index} position={[caseItem.latitud, caseItem.longitud]}>
          <Popup>
            {caseItem.delito} <br />
            {caseItem.fecha} {caseItem.hora}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
