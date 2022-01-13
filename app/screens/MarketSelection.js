import React, { useState } from 'react'
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
    FlatList,
    SafeAreaView
} from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { useNavigationn, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function MarketSelection({ navigation }) {
    const [Market, setMarket] = useState([
        {
            key:'Map1Key',
            MarketName: 'Supermarkt XY',
            MarketStreet: 'Hauptstraße 12',
            MarketArea: '50667 Köln',
            MarketLogo: '../assets/logo.png',
            Products:[{ 
                key:'p1',
                ExampleProduct: 'Frischer Hummer',
                ExamplePrice:'39,99€',
                MapPath: '../assets/Map1.png',
            },
            {
                key:'p2',
                ExampleProduct: 'BIO Nudeln',
                ExamplePrice:'2,50€',
                MapPath: '../assets/Map1.png',
            },
            {
                key:'p3',
                ExampleProduct: 'Seelachsmuß',
                ExamplePrice:'3,99€',
                MapPath: '../assets/Map1.png',
            },
            ]},
        { 
            key:'Map2Key',
            MarketName: 'Baumarkt XY',
            MarketStreet: 'Erasmusweg 34',
            MarketArea: '46325 Borken',
            MarketLogo: '../assets/logo.png',
            Products:[{
                    key:'p1',
                    ExampleProduct: 'Hammer',
                    ExamplePrice:'24,99€',
                    MapPath: '../assets/Map2.png',
                },
                {
                    key:'p2',
                    ExampleProduct: 'Handsäge',
                    ExamplePrice:'49,99€',
                    MapPath: '../assets/Map2.png',
                },
                {
                    key:'p3',
                    ExampleProduct: 'Gartenvlies',
                    ExamplePrice:'54,99€',
                    MapPath: '../assets/Map2.png',
                },
            ]}
    ]);
    return (
    
        <View style={styles.container}>
        <View style={styles.headermenu}>

            <Image source = {require("../assets/icon.png")} style={[styles.headerLogo]}/>
            <Text style={[styles.white]}>Markt auswählen</Text>
            <TouchableOpacity
            
                onPress={()=> console.log("Markt wird hier gesucht todo: Suche aus DB via 'like'")}
                activeOpacity={.8}
                style={styles.searchBar}>

                <Text>Markt Suchen</Text>

            </TouchableOpacity>
            
        </View>
        
        
        <FlatList 
        style = {styles.textbody}
            data={Market}
            renderItem={({ item }) => (
                
                <TouchableOpacity 
                onPress={() =>navigation.navigate('Product', item)}
                activeOpacity={.8}
                style={styles.marketObject}
                >
                <Image source = {require("../assets/icon.png")}style={styles.logo}/>
                    <View style={styles.text}>
                        <Text style={[styles.white]}>{item.MarketName}</Text>
                        <Text style={[styles.white]}>{item.MarketStreet}</Text>
                        <Text style={[styles.white]}>{item.MarketArea}</Text>
                    </View>   
                </TouchableOpacity>
            )}
        />




       
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
   marketObject:{
    flexDirection:"row",
    flex:0.15,
    justifyContent:"flex-start",
    backgroundColor:"#274156",
    margin:5,
    borderWidth:1
    
   },
   logo:{
    resizeMode:"contain",
    width: 80, 
    height: 80,

   },
   headerLogo:{
    resizeMode: "contain",
    height:40,
    width:40
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
   whitemenu: {
    color: 'white',
    flex:0.3,
    textAlign:"center",
    padding:15,
    borderWidth: 1,
    backgroundColor:"#274156"
  },
  white: {
    color: 'white',
 
    
  },
  searchBar:{
    width:"50%",
    height:30,
    marginLeft:10,
    marginRight:10,
    alignItems: "center",
    backgroundColor: "#d0ccd0",
    borderColor:'rgba(0,0,0,0.2)',
    borderRadius:20,
    textAlignVertical:"center",
    padding:5
  },
})
