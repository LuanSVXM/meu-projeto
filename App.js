import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './paginas/login';
import Home from './paginas/home'
import cadastro from './paginas/cadastro'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="login" component={login} options={{headerShown: false}} />
        <Stack.Screen name="cadastro" component={cadastro} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;