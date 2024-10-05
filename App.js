import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Card } from 'react-native-paper';

// or any files within the Snack
import registro from './components/registro';
import pagina1 from './components/pagina1';
import pagina2 from './components/pagina2';
import pagina3 from './components/pagina3';
import pruebas from './components/pruebas';

import inicio_de_sesion from './components/inicio_de_sesion';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="pruebas">
        <Stack.Screen name="pagina1" component={pagina1} />
        <Stack.Screen name="pagina2" component={pagina2} />
        <Stack.Screen name="pagina3" component={pagina3} />
        <Stack.Screen name="inicio_de_sesion" component={inicio_de_sesion} />
        <Stack.Screen name="registro" component={registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;