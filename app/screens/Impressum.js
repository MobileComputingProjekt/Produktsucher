import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

export default function Impressum({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textbody}>
        <Text style={styles.titleText}>Impressum {"\n"}</Text>
        Angaben gemäß § 5 TMG {"\n"}
        Vertreten durch: {"\n"}
        Torsten Haas {"\n"}
        Khalid Benmahria {"\n"}
        Kontakt: {"\n"}
        E-Mail: torsten.haas@stud.hs-ruhrwest.de {"\n"}
        E-Mail: khalid.benmahria@stud.hs-ruhrwest.de
      </Text>
      <Text style={styles.textbody}>
        <Text style={styles.titleText}>Haftungsausschluss: {"\n"}</Text>
        Haftung für Inhalte: {"\n"}
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. {"\n"}
        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
        wir jedoch keine Gewähr übernehmen. {"\n"}
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. {"\n"}
        Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
        Tätigkeit hinweisen. {"\n"}
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. {"\n"}
        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
        Inhalte umgehend entfernen. {"\n"}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfcff",
  },
  textbody: {
    flex: 1,
    textAlign: "left",
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
