import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import Sign from '../components/Sign';
import {Context as AuthContext} from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation';

const SignupScreen = () => {
  const {signup, clearErrorMessage} = useContext(AuthContext);
  return <View style={styles.view}>
      <NavigationEvents
        onWillBlur= {clearErrorMessage}
      />
      <Sign 
        title="Sign Up for Tracker"
        buttonTitle="Sign Up"
        routeName="Signin"
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