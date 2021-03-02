import React, {useContext}from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {NavigationEvents} from 'react-navigation';
import Sign from '../components/Sign';
import {Context as AuthContext} from '../context/AuthContext';

const SigninScreen = () => {
  const {signin, clearErrorMessage} = useContext(AuthContext);
  return <View style={styles.view}>
      <NavigationEvents
        onWillBlur= {clearErrorMessage}
      />
      <Sign 
        title="Sign In for Tracker"
        buttonTitle="Sign In"
        routeName="Signup"
        sign="Don't have an account? Sign up instead"
        signFunc={(email,password)=> signin({email,password})}
        />
  </View>;
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150
}
});

SigninScreen.navigationOptions = {
  headerShown: null
};

export default SigninScreen;