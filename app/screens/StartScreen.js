import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigationn, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.content}>Produktsucher</Text>
      <Image source={require("../assets/icon.png")} style={styles.logo} />

      <Text style={styles.content}>{"\n"}</Text>
      <TouchableOpacity
        onPress={() => console.log("test")}
        activeOpacity={0.8}
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Anmelden</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        activeOpacity={0.8}
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Registrieren</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Impressum")}
        activeOpacity={0.8}
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Impressum</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFCFF",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    marginLeft: 10,
    marginRight: 10,
  },

  logo: {
    height: 300,
    width: "70%",
    resizeMode: "contain",
  },
  buttons: {
    width: "70%",
    height: 50,
    margin: 10,
    alignItems: "center",
    backgroundColor: "#274156",
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 20,
  },
  buttonText: {
    textAlignVertical: "center",
    color: "white",
    padding: 15,
  },
});
