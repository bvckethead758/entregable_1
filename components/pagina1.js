import { Text, View, StyleSheet, Image, TextInput,Button,TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
function pagina1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textOverlay}>
      </Text>
      <View style={styles.imageContainer}>
        <TextInput
          style={styles.input}
          placeholder="                       buscar "
        />


         <Image style={styles.logo} source={require('../assets/goku.jpg')} />
         <Image style={styles.lupa} source={require('../assets/lupa.jpg')} />

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
  input: {
    height: 40,
    width: 190,left: 90,
    border: '2px solid black',
    borderColor: 'gray',
    borderWidth: 1,
    top: 10, 
    position: 'absolute',
    zIndex: 1, 
    backgroundColor: 'white',

  },
    input_contrasena: {
    height: 60,
    width: 190,left: 90,
    border: '2px solid black',
    borderColor: 'gray',
    borderWidth: 1,
    top: 50, 
    position: 'absolute',
    zIndex: 1, 
    backgroundColor: 'white',

  },
  lupa: {
    height: 40,
    width: 50,
    margin: 6,
    position: 'absolute',
    top: 4,
    left: 263,
    border: '2px solid black',
  },
});

export default pagina1;

