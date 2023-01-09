import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import osm from "./osm-providers";

import cities from "./cities.json";

const markerIcon = new L.Icon({
  iconUrl: require("../../assets/img/marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const Find_Us = () => {
  const [center, setCenter] = useState({ lat: 23.777176, lng: 90.407608 });
  const ZOOM_LEVEL = 6;
  const mapRef = useRef();

  return (
    <section>
      <div className="container-fluid">
        <div className="row" style={{ zIndex: -1 }}>
          <div className="col text-center">
            <div class="title-area text-center">
              <span class="sub-title"></span>
              <h2 class="sec-title">
                Find us in this <span class=" sf_text-theme">State</span>
              </h2>
            </div>
            <div
              className="col mt-5"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <MapContainer
                center={center}
                zoom={ZOOM_LEVEL}
                ref={mapRef}
                style={{ height: 400, width: "100wh" }}
              >
                <TileLayer
                  url={osm.maptiler.url}
                  attribution={osm.maptiler.attribution}
                />

                {cities.map((city, idx) => (
                  <Marker
                    position={[city.lat, city.lng]}
                    icon={markerIcon}
                    key={idx}
                  >
                    <Popup>
                      <b>
                        {city.city}, {city.country}
                      </b>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Find_Us;
