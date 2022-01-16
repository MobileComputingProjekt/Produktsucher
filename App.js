import React from "react";
import { View } from "react-native";
import StartScreen from "./app/screens/StartScreen";
import Register from "./app/screens/Register";
import Impressum from "./app/screens/Impressum";
import MarketSelection from "./app/screens/MarketSelection";
import ProductSelection from "./app/screens/ProductSelection";
import Map from "./app/screens/Map";
import ShoppingList from "./app/screens/ShoppingList";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Impressum" component={Impressum} />
        <Stack.Screen name="login" component={Register} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Market" component={MarketSelection} />
        <Stack.Screen name="Product" component={ProductSelection} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="List" component={ShoppingList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
