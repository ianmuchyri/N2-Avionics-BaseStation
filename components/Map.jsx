import React, { useRef, useEffect,useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoidGhlcGFyYWRveDIwIiwiYSI6ImNsZHdlMnpyMTA2bGUzbnBob2Jld2l3NmUifQ.zrAEdfZdTfrWr9yvSuu9Xg";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
   //jkuat ipic coordinates (lat,lon) -1.0953775626377544, 37.01223403257954
   let [lng, setLng] = useState(37.01223403257954);
   let [lat, setLat] = useState(-1.0953775626377544);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    // map.current.on("move", () => {
    //   setLng(map.current.getCenter().lng.toFixed(4));
    //   setLat(map.current.getCenter().lat.toFixed(4));
    //   setZoom(map.current.getZoom().toFixed(2));
    // });
  });

  return (
    <div>
      <div className="sidebar">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div ref={mapContainer} className="map-container" style={{width: "100%", height:"100%"}} />
    </div>
  );
};