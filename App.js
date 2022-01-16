import React from 'react';
import {View} from 'react-native';
import StartScreen from './app/screens/StartScreen';
import Register from './app/screens/Register';
import Impressum from './app/screens/Impressum';
import MarketSelection from './app/screens/MarketSelection';
import ProductSelection from './app/screens/ProductSelection';
import Map from './app/screens/Map';
import ShoppingList from './app/screens/ShoppingList';
import Test from './app/screens/test'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import test from './app/screens/test';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Test"  screenOptions={{headerShown: false}}>
    
      <Stack.Screen name="Start" component={StartScreen}/>
      <Stack.Screen name="Impressum" component={Impressum}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="Market" component={MarketSelection}/>
      <Stack.Screen name="Product" component={ProductSelection}/>
      <Stack.Screen name="Map" component={Map}/>
      <Stack.Screen name="List" component={ShoppingList}/>
      <Stack.Screen name="Test" component={Test}/>

     </Stack.Navigator>
    </NavigationContainer>
   
  );
}

