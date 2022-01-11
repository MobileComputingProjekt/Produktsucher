import React from 'react'
import {
    StyleSheet, 
    Text,
    TextInput, 
    View, 
    Image, 
    StatusBar, 
    Button, 
    Alert, 
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'
import { useNavigationn, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Register({ navigation }) {
    return (
        <View style={styles.container}>

        <View style={styles.emptySpace}></View>
        
        <View style={styles.registerSpace}>

        <Image source = {
        require("../assets/icon.png")} style={styles.logo}/>

            <View style={styles.registerFields}>
         
            <TextInput
                style={styles.registerElementsInput}
                placeholder="Benutzername"
                keyboardType="default"
            />
           
            <TextInput
                style={styles.registerElementsInput}
                placeholder="Passwort"
                keyboardType="default"
            />
        
            <TextInput
                style={styles.registerElementsInput}
                placeholder="Passwort wiederholen"
                keyboardType="default"
            />

        <TouchableOpacity
       onPress={()=> navigation.navigate('Register')}
        activeOpacity={.8}
        style={styles.registerButton}
             
                
           
                onPress={()=> navigation.navigate('Market')}
            >
            <Text style={styles.white}>Registrieren</Text>
            </TouchableOpacity>

            </View>

        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FBFCFF',
        justifyContent:"center",

    },
    emptySpace:{
        flex: 3,

    },
    registerSpace:{
        flex: 6,
        alignItems:"center",

  
    },
    logo:{
        height:"30%",
        width:"70%",
       resizeMode: "contain",

   
    },
    registerFields:{
        flex:4,
        alignContent:"center",
        padding:15,
    },

    registerButton:{
    height:50,
    marginTop:10,
    alignItems: "center",
    backgroundColor: "#274156",
    borderColor:'rgba(0,0,0,0.2)',
    borderRadius:20,

    },
    registerElementsInput:{
        flex:.1,
        alignContent:"center",
        backgroundColor:"#d0ccd0",
       
        width:250,
        marginBottom:12,
        borderWidth: 1,
        padding: 5,
    },
    white: {
        color: 'white',
        textAlignVertical:"center",
        padding:15
      },
})
