import { Text, View, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

function pagina2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textOverlay}>
      </Text>
      <View style={styles.imageContainer}>
        <Image style={[styles.logo, styles.rounded]} source={require('../assets/tifa.jpg')} />
        <TouchableOpacity onPress={() => alert('boton presionado')}>
        <Image style={[styles.imagen1, styles.rounded]} source={require('../assets/kratos.jpeg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('boton presionado')}>
        <Image style={[styles.imagen2, styles.rounded]} source={require('../assets/crash.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('boton presionado')}>
        <Image style={[styles.imagen3, styles.rounded]} source={require('../assets/jack.jpeg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('boton presionado')}>
        <Image style={[styles.imagen4, styles.rounded]} source={require('../assets/ben.jpg')} />
        </TouchableOpacity>        
        <TouchableOpacity  onPress={() => navigation.navigate('pagina3')}>
        <Image style={[styles.imagen5, styles.rounded]} source={require('../assets/gta.jpeg')} />
        </TouchableOpacity>      </View>

                  <Button
            title="                                regresar                         "
            onPress={() => navigation.navigate('pagina1')}
          />

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
    height: 558,
    width: 300,
    margin: 0,
    borderWidth: 3,
    borderColor: 'black',
  },
  imagen1: {
    height: 80,
    width: 150,
    position: 'absolute',
    top: -520,
    left: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
  imagen2: {
    height: 80,
    width: 150,
    position: 'absolute',
    top: -430,
    left: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
  imagen3: {
    height: 80,
    width: 150,
    position: 'absolute',
    top: -330,
    left: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
  imagen4: {
    height: 80,
    width: 150,
    position: 'absolute',
    top: -230,
    left: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
  imagen5: {
    height: 80,
    width: 150,
    position: 'absolute',
    top: -130,
    left: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
  rounded: {
    borderRadius:30,
  },
});

export default pagina2;