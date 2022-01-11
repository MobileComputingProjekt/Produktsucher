import React from 'react'
import {
    StyleSheet, 
    Text, 
    View, 
    Image, 
    StatusBar, 
    Button, 
    Alert, 
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { useNavigationn, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function ShoppingList({ navigation }) {
    return (
        <View style={styles.container}>
        <View style={styles.headermenu}>

            <Text style={[styles.whitetext]}>Logo</Text>
            <Text style={[styles.whitetextMoreSpace]}>Einkaufsliste</Text>
     
            
        </View>
        <ScrollView style={styles.textbody}>

        <View style={styles.marketObject}>

        <Image source = {require("../assets/icon.png")}style={styles.logo}/>

        <View style={styles.text}>

        <Text style={[styles.white]}>DB Produkt Name</Text>
        <Text style={[styles.white]}>DB Produkt Preis</Text>
        <Text style={[styles.white]}>DB Markt Name</Text>

        </View>
        
        
        </View>

        </ScrollView>

        <View style={styles.footermenu}>

        <TouchableOpacity 
            onPress={()=> navigation.navigate('Market')}
            activeOpacity={.8}
            style={[styles.whitemenu]}>
            <Text style={[styles.white]}>Markt</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=> navigation.navigate('Map')}
            activeOpacity={.8}
            style={[styles.whitemenu]}>
            <Text style={[styles.white]}>Karte</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=> navigation.navigate('List')}
            activeOpacity={.8}
            style={[styles.whitemenu]}>
            <Text style={[styles.white]}>Einkaufsliste</Text>
            </TouchableOpacity>
        
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,    
        backgroundColor:"#fbfcff"
        
    },
   headermenu:{
    flex:0.1,
    backgroundColor:'#1e6c8e',
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",

   },
   textbody:{
    flex: 1,
    marginTop: 15,
    marginLeft:15,
    marginRight:15,

   },
   footermenu:{
    flex:0.1,
    backgroundColor:'#1e6c8e',
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",

   },
   whitemenu: {
    color: 'white',
    flex:0.3,
    textAlign:"center",
    padding:15,
    backgroundColor:"#274156",
    borderWidth: 1

  },
  whitetext: {
    color: 'white',
    flex:0.3,
    textAlign:"center",
    padding:15,

  },
  whitetextMoreSpace: {
    color: 'white',
    flex:0.7,
    textAlign:"center",
    padding:15,

  },
  white: {
    color: 'white',

    
  },
   marketObject:{
    flexDirection:"row",
    flex:0.15,
    justifyContent:"flex-start",
    backgroundColor:"#274156",
    
   },
   logo:{
    resizeMode:"contain",
    flex:4, 
    width: undefined, 
    height: undefined,
    backgroundColor:"black",
   },
   text:{
       flex:10,
       color:"white",
       justifyContent:"center",
       justifyContent:"space-between",
       marginTop: 10,
       marginBottom: 10,
       marginLeft:10,
   },
 
})
