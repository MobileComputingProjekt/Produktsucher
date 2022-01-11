import React from 'react'
import {
    StyleSheet, 
    Text, 
    View, 
    Image, 
    StatusBar, 
    Button, 
    Alert, 
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { useNavigationn, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Impressum({ navigation }) {
    return (
        <ScrollView>
            <Text>
Impressum

Angaben gemäß § 5 TMG

Vertreten durch:
Torsten Haas
Khalid Benmahria

Kontakt:
E-Mail: torsten.haas@stud.hs-ruhrwest.de

Haftungsausschluss:

Haftung für Inhalte

Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen 
Gesetzen verantwortlich. 
Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, 
übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, 
die auf eine rechtswidrige Tätigkeit hinweisen. 
Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
 der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden 
 von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.

            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
