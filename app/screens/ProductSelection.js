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
    FlatList,
    ScrollView,
    SafeAreaView
} from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { useNavigationn, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function ProductSelection({ route, navigation }) {
const { Products} = route.params;
    return (
        <View style={styles.container}>
        <View style={styles.headermenu}>

            <Image source = {require("../assets/icon.png")} style={[styles.headerLogo]}/>
            <Text style={[styles.white]}>Produkt auswählen</Text>
            <TouchableOpacity
            
                onPress={()=> console.log("Produkt wird hier gesucht todo: Suche aus DB via 'like' & Marktname")}

                activeOpacity={.8}
                style={styles.searchBar}>
                <Text>Produkt Suchen</Text>

            </TouchableOpacity>
            
        </View>

       

        <FlatList 
        style = {styles.textbody}
            data={Products}
            renderItem={({ item }) => (
                
                <View style={styles.marketProduct}>
                
                <Image source = {require("../assets/icon.png")}style={styles.logo}/>
                    <View style={styles.text}>
                        <Text style={[styles.white]}>{item.ExampleProduct}</Text>
                        <Text style={[styles.white]}>{item.ExamplePrice}</Text>
                    </View>   
                <TouchableOpacity activeOpacity={.8} style={styles.buttonSelect}>
                    <Text style={styles.white}>Zu Einkaufsliste hinzufügen</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    activeOpacity={.8} 
                    style={styles.buttonSelect}
                    onPress={()=> navigation.navigate('Map', item)}>
                    <Text style={styles.white}>Direkt anzeigen</Text>
                </TouchableOpacity>
                </View>
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
                onPress={()=> navigation.navigate('Map', MapPath)}
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
        flex:3,
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
        margin:10,
        textAlignVertical:"center",
        backgroundColor:"#1c6e8c",
        flex:3
        

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
