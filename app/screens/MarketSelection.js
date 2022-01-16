import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";


export default function MarketSelection({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMarkets = async () => {
    try {
      const response = await fetch(
        "https://testmarket3.free.beeceptor.com/market"
      );
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMarkets();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headermenu}>
        <Image
          source={require("../assets/icon.png")}
          style={[styles.headerLogo]}
        />
        <Text style={[styles.white]}>Markt auswählen</Text>
        <TouchableOpacity
          onPress={() =>
            console.log("Markt wird hier gesucht todo: Suche aus DB via 'like'")
          }
          activeOpacity={0.8}
          style={styles.searchBar}
        >
          <Text>Markt Suchen</Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.textbody}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Product", item)
              }
              activeOpacity={0.8}
              style={styles.marketObject}
            >
              <Image source={{ uri: item.marketLogo }} style={styles.logo} />
              <View style={styles.text}>
                <Text style={[styles.white]}>{item.marketName}</Text>
                <Text style={[styles.white]}>{item.marketStreet}</Text>
                <Text style={[styles.white]}>{item.marketArea}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

      <View style={styles.footermenu}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Market")}
          activeOpacity={0.8}
          style={[styles.whitemenu]}
        >
          <Text style={[styles.white]}>Markt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={true}
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
  marketObject: {
    flexDirection: "row",
    flex: 0.15,
    justifyContent: "flex-start",
    backgroundColor: "#274156",
    margin: 5,
    borderWidth: 1,
  },
  logo: {
    resizeMode: "contain",
    width: 80,
    height: 80,
  },
  headerLogo: {
    resizeMode: "contain",
    height: 40,
    width: 40,
  },
  text: {
    flex: 10,
    color: "white",
    justifyContent: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  whitemenu: {
    color: "white",
    flex: 0.3,
    padding: 15,
    borderWidth: 1,
    backgroundColor: "#274156",
  },
  white: {
    color: "white",
  },
  searchBar: {
    width: "50%",
    height: 30,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    backgroundColor: "#d0ccd0",
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 20,
    textAlignVertical: "center",
    padding: 5,
  },
});
