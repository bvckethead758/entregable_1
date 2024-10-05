import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

function pagina4({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textOverlay}></Text>
      <View style={styles.imageContainer}>
        <TextInput
          style={styles.input_usuario}
          placeholder="                   usuario "
        />
        <TextInput
          style={styles.input_contrasena}
          placeholder="                 contraseña "
        />
        <Image style={styles.logo} source={require('../assets/Saint.jpg')} />
        <View style={styles.buton1}>
          <Button
            style={styles.boton1}
            title="ingresar"
            onPress={() => alert('Botón presionado')}
          />
           <Button
            style={styles.boton2}
            title="registrarse"
            onPress={() => alert('Botón presionado')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 748,
    width: 400,
    margin: 0,
    borderWidth: 3,
    borderColor: 'black',
  },
  input_usuario: {
    height: 40,
    width: 190,
    left: 100,
    borderWidth: 2,
    borderColor: 'gray',
    top: 300,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
  },
  input_contrasena: {
    height: 40,
    width: 190,
    left: 100,
    borderWidth: 2,
    borderColor: 'gray',
    top: 400,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
  },
  button1: {
    top: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton2: {
    // Puedes agregar estilos adicionales aquí si es necesario
      top: -500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default pagina4;
