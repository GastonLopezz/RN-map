import React, {useState, useContext} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from './Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import NavLink from './NavLink';

const Sign = ({routeName,title,sign,signFunc,buttonTitle}) => {
    const {state} = useContext(AuthContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  return <View>
      <Spacer>
        <Text h3>{title}</Text>
      </Spacer>
      <Input 
        label="Email" 
        value={email} 
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        />
      <Spacer/>
        <Input 
          secureTextEntry
          label="Password" 
          value={password} 
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          />
          {state.error ? <Text style={styles.errorMessage}>{state.error}</Text>:null}
      <Spacer>
        <Button title={buttonTitle} onPress={()=> signFunc(email,password)}/>
        <NavLink
          routeName={routeName}
          sign={sign}
        />
      </Spacer>
      
  </View>;
}
const styles = StyleSheet.create({
    view:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },
    errorMessage:{
        marginTop: 15,
        marginLeft: 15,
        color: 'red'
    } 
  });

export default Sign;