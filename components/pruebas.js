import { Text, View, StyleSheet, Image, TextInput,Button,TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
function pruebas({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textOverlay}>
      </Text>
      <View style={styles.imageContainer}>

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
});

export default pruebas;

