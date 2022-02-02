import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from 'react-query';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind';

import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import QuestionScreen from './screens/QuestionScreen';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const linking = {
  prefixes: ['https://1on1.taeho.io', '1on1://'],
  config: {
    screens: {
      Home: '',
      Category: 'categories/:categoryId',
      Question: 'questions/:questionId',
    },
  },
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TailwindProvider utilities={utilities}>
        <NavigationContainer linking={linking}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="Question" component={QuestionScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </QueryClientProvider>
  );
}

export default App;
