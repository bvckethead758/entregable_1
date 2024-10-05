import { Text, View, StyleSheet, Image, TextInput,Button,TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
function registro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textOverlay}>
      </Text>
      <View style={styles.imageContainer}>
        <TextInput
          style={styles.input_correo}
          placeholder="                     correo "
        />

                <TextInput
          style={styles.input_usuario}
          placeholder="                    usuario "
        />


                <TextInput
          style={styles.input_contrasena}
          placeholder="                 contraseña "
        />


<Text style={styles.apodo_text}>holaaaaaa</Text>

                <TextInput
          style={styles.input_apodo}
          placeholder="                     apodo "
        />

         <Image style={styles.logo} source={require('../assets/yugi.jpg')} />
          <Button
            title="pagina 2"
            onPress={() => navigation.navigate('pagina2')}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 748,
    width: 400,
    margin: 0,
    border: '3px solid black',

  },
  input_correo: {
    height: 60,
    width: 190,left: 90,
    border: '2px solid black',
    borderColor: 'gray',
    borderWidth: 1,
    top: 150, 
    position: 'absolute',
    zIndex: 1, 
    backgroundColor: 'white',

  },
    input_usuario: {
    height: 60,
    width: 190,left: 90,
    border: '2px solid black',
    borderColor: 'gray',
    borderWidth: 1,
    top: 250, 
    position: 'absolute',
    zIndex: 1, 
    backgroundColor: 'white',

  }
  ,   input_contrasena: {
    height: 60,
    width: 190,left: 90,
    border: '2px solid black',
    borderColor: 'gray',
    borderWidth: 1,
    top: 350, 
    position: 'absolute',
    zIndex: 1, 
    backgroundColor: 'white',


  },
  
    apodo_text: {
    position: 'absolute',
    top: 30,
    left: 10,
    right: 10,
    color: 'black',

  },
    input_apodo: {
    height: 60,
    width: 190,left: 90,
    border: '2px solid black',
    borderColor: 'gray',
    borderWidth: 1,
    top: 450, 
    position: 'absolute',
    zIndex: 1, 
    backgroundColor: 'white',

  },
});

export default registro;

