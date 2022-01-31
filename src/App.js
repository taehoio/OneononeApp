import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['https://1on1.taeho.io', '1on1://'],
  config: {
    screens: {
      Home: '',
      Detail: 'detail',
    },
  },
};

function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="1on1 Questions" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

export default App;
