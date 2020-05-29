
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 //style={{}
class SimpleMap extends Component {
 
  static defaultProps = {
    center: {
      lat: 10.989746,
      lng: -74.788544
    },
    zoom: 20
  };
  render() {
    return (
      <div style={{ height: '60vh', width: '40%', position: 'sticky', left: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyDP5J-WFmBh60Xn3lwVnEcVo60hMy_NZYk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={10.989746}
            lng={-74.788544}
            text="PUNTO DE ENTREGA"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;