import { Text, View, StyleSheet, Image,Button, TextInput } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

function pagina3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textOverlay}>
      </Text>
      <View style={styles.imageContainer}>

        <Image style={styles.logo} source={require('../assets/fondo.jpg')} />

        <Image style={styles.imagen_miniatura} source={require('../assets/gta.jpeg')} />
        <Image style={styles.imagen_pegui} source={require('../assets/pegui.jpeg')} />

        <Text style={styles.descripcion}>La historia del juego trascurre en el estado ficticio de San Andreas, basado en la zona suroeste estadounidense. Ambientado en 1992, San Andreas cuenta la historia de Carl Johnson, quien decide volver a Los Santos tras cinco años de haberse establecido en Liberty City. Su trama se basa, de modo muy abierto, en sucesos como la rivalidad entre las pandillas Bloods y Crips, la epidemia de crack que hubo en esa época y los disturbios de Los Ángeles de 1992.</Text>

<Text style={styles.titulo}>TITULO: GRAND THEFT AUTO SANANDREAS</Text>

<Text style={styles.desarrollador}>DESAROLLADORA: ROCKSTAR GAMES</Text>

<Text style={styles.plataforma}>PLATAFORMA: PS2</Text>

          <Button
            title="regresar "
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
    border: '4px solid black',
  },
    imagen_miniatura: {
    height: 280,
    width: 220,
    position: 'absolute',
    top: 120,
    left: 20,
    border: '3px solid white',

  }, 
  
     imagen_pegui: {
    height: 50,
    width:40,
    position: 'absolute',
    top: 310,
    left: 270,
    border: '3px solid white',

  }, descripcion: {
    position: 'absolute',
    top: 470,
    left: 10,
    right: 10,
    color: 'gold',
    backgroundColor: 'black',
    border: '2px solid white',


  },  titulo: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    color: 'gold',

  },
  desarrollador: {
    position: 'absolute',
    top: 30,
    left: 10,
    right: 10,
    color: 'gold',

  },
  plataforma: {
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    color: 'gold',

  },rounded: {
    borderRadius:20,
  },

});

export default pagina3;
