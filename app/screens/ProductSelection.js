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
export default function ProductSelection({ navigation }) {
    return (
        <View style={styles.container}>
        <View style={styles.headermenu}>

            <Text style={[styles.white]}>Logo(Icon)</Text>
            <Text style={[styles.white]}>Produkt auswählen</Text>
            <TouchableOpacity
            
                onPress={()=> console.log("Produkt wird hier gesucht todo: Suche aus DB via 'like' & Marktname")}

                activeOpacity={.8}
                style={styles.searchBar}>
                <Text>Produkt Suchen</Text>

            </TouchableOpacity>
            
        </View>

        <ScrollView style={styles.textbody}>
        <View style={styles.marketProduct}>

        <Image source = {require("../assets/icon.png")}style={styles.logo}/>

        <View style={styles.text}>

        <Text style={[styles.white]}>DB Produkt Name</Text>
        <Text style={[styles.white]}>DB Produkt Preis</Text>

        <View style={styles.productButtons}>

        <TouchableOpacity activeOpacity={.8} style={styles.buttonSelect}>
        <Text style={styles.white}>Zu Einkaufsliste hinzufügen</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        activeOpacity={.8} 
        style={styles.buttonSelect}
        onPress={()=> navigation.navigate('Map')}>
        <Text style={styles.white}>Direkt anzeigen</Text>
        </TouchableOpacity>

        </View>
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
   marketProduct:{
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
      padding:5,
   },
   productButtons:{
       flexDirection:'row',
       flex:0.75,
   },
   buttonSelect:{
       flex:0.5,
       marginRight:5,
        textAlignVertical:"center",
        backgroundColor:"#1c6e8c",
        

   },
   searchBar:{
    width:"50%",
    height:30,
    margin:10,
    alignItems: "center",
    backgroundColor: "#d0ccd0",
    borderColor:'rgba(0,0,0,0.2)',
    borderRadius:20,
    textAlignVertical:"center",
    padding:5
  },
   white: {
    color: 'white',
  },
  whitemenu: {
    color: 'white',
    flex:0.3,
    textAlign:"center",
    padding:15,
    borderWidth: 1,
    backgroundColor:"#274156"
  },
})