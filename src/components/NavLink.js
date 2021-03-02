import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import Spacer from './Spacer';
import {withNavigation} from 'react-navigation';



const NavLink = ({navigation, sign, routeName}) => {
  return <View>
      <Spacer>
        <TouchableOpacity onPress={()=> navigation.navigate(routeName)}>
          <Text style={styles.signin}>{sign}</Text>
        </TouchableOpacity>
        </Spacer>
  </View>;
}

const styles = StyleSheet.create({
    signin:{
        color: 'blue'
    }   
});
export default withNavigation(NavLink);