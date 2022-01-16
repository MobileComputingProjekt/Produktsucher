import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Map({ navigation, route }) {
  const { mapPath, xCoord, yCoord } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headermenu}>
        <Image
          source={require("../assets/icon.png")}
          style={[styles.headerLogo]}
        />
        <Text style={[styles.headerText]}>Karte Markt(von Db)</Text>
      </View>
      <View style={styles.textbody}>
        <ImageBackground
          source={{ uri: mapPath }}
          resizeMode="contain"
          style={styles.image}
        >
          <Image
            style={{
              position: "absolute",
              resizeMode: "contain",
              height: 20,
              width: 20,
              top: xCoord,
              left: yCoord,
            }}
            source={require("../assets/Locator.png")}
          />
        </ImageBackground>
      </View>

      <View style={styles.footermenu}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Market")}
          activeOpacity={0.8}
          style={[styles.whitemenu]}
        >
          <Text style={[styles.white]}>Markt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Map")}
          activeOpacity={0.8}
          style={[styles.whitemenu]}
        >
          <Text style={[styles.white]}>Karte</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("List")}
          activeOpacity={0.8}
          style={[styles.whitemenu]}
        >
          <Text style={[styles.white]}>Einkaufsliste</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfcff",
  },
  headermenu: {
    flex: 0.1,
    backgroundColor: "#1e6c8e",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerLogo: {
    flex: 0.3,
    resizeMode: "contain",
    height: 40,
    width: 40,
  },
  headerText: {
    flex: 1,
    color: "white",
    textAlign: "center",
  },
  textbody: {
    flex: 1,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  footermenu: {
    flex: 0.1,
    backgroundColor: "#1e6c8e",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  whitemenu: {
    color: "white",
    flex: 0.3,
    textAlign: "center",
    padding: 15,
    borderWidth: 1,
    backgroundColor: "#274156",
  },
  white: {
    color: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  testLocatedItem: {
    resizeMode: "contain",
    height: 20,
    width: 20,
    position: "absolute",
    top: "36%",
    left: "40%",
  },
});
