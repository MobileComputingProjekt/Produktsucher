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
    ImageBackground,
    FlatList,
    SafeAreaView
} from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { useNavigationn, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Map({ route, navigation }) {
    const {Products} = route.params;
    return (
        <View style={styles.container}>
        <View style={styles.headermenu}>
        
            <Text style={[styles.white]}>Logo</Text>
            <Text style={[styles.white]}>Karte Markt(von Db)</Text>
            <Text style={[styles.whitemenu]}>Einkaufsliste menü zeigen</Text>
            
        </View>
        
<FlatList
        data={Products}
        renderItem={({ item }) => (
            <ImageBackground style={styles.textbody}
            resizeMode='cover'
            source={item.MapPath}
            />
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

})
