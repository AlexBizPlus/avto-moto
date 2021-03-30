import React from "react";
import GoogleMapReact from "google-map-react";
import { ReactComponent as LocationSvg } from "../../images/location.svg";
import { MapSettings, YOUR_API_KEY } from "../../const";

const Marker = () => <LocationSvg />;

const SimpleMap = () => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "271px", width: "431px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: YOUR_API_KEY }}
        defaultCenter={MapSettings.center}
        defaultZoom={MapSettings.zoom}
      >
        <Marker lat={MapSettings.marker.lat} lng={MapSettings.marker.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
