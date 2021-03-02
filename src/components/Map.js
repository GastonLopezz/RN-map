import React, {useContext} from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, {Polyline, Circle } from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {
  const {state} = useContext(LocationContext);

  if(!state.currentLocation){
    return <ActivityIndicator size="large" style={{marginTop: 200}}/>;
  }
  return <MapView 
    style={styles.map}
    initialRegion={{
      ...state.currentLocation.coords,
      longitudeDelta: 0.01,
      latitudeDelta: 0.01
    }}
    region={{
      ...state.currentLocation.coords,
      longitudeDelta: 0.01,
      latitudeDelta: 0.01
    }}
    >
      <Circle
        center={state.currentLocation.coords}
        radius= {15}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
    </MapView>;
};

const styles = StyleSheet.create({
  map:{
    height: 300
  }
});

export default Map;