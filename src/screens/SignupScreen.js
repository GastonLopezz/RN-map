import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import Sign from '../components/Sign';
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({navigation}) => {
  const {signup} = useContext(AuthContext);

  return <View style={styles.view}>
      <Sign 
        title="Sign Up for Tracker"
        buttonTitle="Sign Up"
        nav={()=>navigation.navigate('Signin')} 
        sign="Already have an account? Sign in instead"
        signFunc={(email,password)=> signup({email,password})}
        />
  </View>;
}

SignupScreen.navigationOptions = {
  headerShown: null
};

const styles = StyleSheet.create({
  view:{
      flex: 1,
      justifyContent: 'center',
      marginBottom: 150
  }
});

export default SignupScreen;