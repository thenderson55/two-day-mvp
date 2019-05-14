import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 35.690131, 
      lng:139.706736
    },
    zoom: 14
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDJ3sPnmTBMN1DZGJBX9gxuNg-O9mgHOAo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
      
        </GoogleMapReact>
        
      </div>
    );
  }
}
 
export default SimpleMap;