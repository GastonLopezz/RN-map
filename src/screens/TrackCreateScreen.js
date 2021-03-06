import React, {useContext} from 'react';
import useLocation from '../hooks/useLocation';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Map from '../components/Map';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import {Context as LocationContext} from '../context/LocationContext';



const TrackCreateScreen = ({isFocused}) => {
  const {addLocation} = useContext(LocationContext);
  const [err] = useLocation(isFocused,addLocation);
  return (
  <SafeAreaView forceInset={{top:'always'}}>
    <Text h2>Create a Track</Text>
    <Map />
    
    {err ? <Text>Please enable location services</Text> : null }
  </SafeAreaView>
  );

};

const styles = StyleSheet.create({

}); 

export default withNavigationFocus(TrackCreateScreen);