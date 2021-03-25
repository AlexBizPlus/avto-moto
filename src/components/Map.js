import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { ReactComponent as LocationSvg } from "../images/location.svg";
import { YOUR_API_KEY } from "../const";

const Marker = () => <LocationSvg />;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.968137,
      lng: 30.316263,
    },
    zoom: 5,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "271px", width: "431px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: YOUR_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={59.968137} lng={30.316263} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
