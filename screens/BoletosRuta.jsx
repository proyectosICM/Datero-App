import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, ScrollView } from "react-native";

export function BoletosRuta() {
  const boletoOptions = [
    { title: "Escolar", price: 0.5 },
    { title: "Medio", price: 1.5 },
    { title: "Zonal", price: 1.5 },
    { title: "Urbano", price: 2.0 },
    { title: "Completo", price: 3.0 },    
    { title: "Colocar Monto", price: 0.0 },
  ];

  const handleBoletoPress = (price) => {
    console.log(`Boleto seleccionado: ${price}`);
  };

  let numColumns = 2;

  if (boletoOptions.length === 1) {
    numColumns = 1; // Cuando solo hay un elemento, usar una sola columna
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Boletos</Text>
      <ScrollView style={{ height: "100%"}}>
        <View style={styles.boletosContainer}>
          {boletoOptions.map((item, index) => (
            <TouchableOpacity style={styles.caja} key={index} onPress={() => handleBoletoPress(item.price)}>
              <Text style={styles.textoBoleto}>{item.title}</Text>
              <Text style={styles.textoBoleto}>${item.price.toFixed(2)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  titleText: {
    fontSize: 24,
    textAlign: "center", // Alinea el texto al centro
  },
  boletosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    height: 400,
    /*
    borderColor: "blue",
    borderWidth: 2,
    */
  },
  caja: {
    width: "40%",
    height: "25%",
    backgroundColor: "#ede3b4",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  textoBoleto: {
    fontSize: 20,
  },
});
