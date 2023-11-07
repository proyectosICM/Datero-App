import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput, Modal } from "react-native";
import { agregarElemento, useListarElementos } from "../Hooks/CRUDHooks";
import { boletoxruta, conteoxaumentar } from "../API/apiurls";

export function BoletosRuta() {
  const boletoOptions = [
    { title: "Escolar", price: 0.5 },
    { title: "Medio", price: 1.5 },
    { title: "Zonal", price: 1.5 },
    { title: "Urbano", price: 2.0 },
    { title: "Completo", price: 3.0 },
    { title: "Colocar Monto", price: 0.0 },
  ];

  const [monto, setMonto] = useState("");
  const [customInputText, setCustomInputText] = useState("");
  const [isCustomInputVisible, setCustomInputVisible] = useState(false);
  const [selectedBoletoId, setSelectedBoletoId] = useState(null);


  const [datos, setDatos] = useState("");
  const idemp = 19;
  const idruta = 2;
  useListarElementos(`${boletoxruta}${idemp}/${idruta}`, setDatos);

  const handleBoletoPress = (idboleto, title, price) => {
    if (title === "Ingresar Valor") {
      // Mostrar el campo de entrada de texto personalizado
      setSelectedBoletoId(idboleto)
      setCustomInputVisible(true);
    } else {
      console.log(`Boleto seleccionado: ${title} - Precio: $${price}`);
      setMonto(`$${price}`);
      const requestData = {
        boletosModel: {
          id: idboleto,
        },
        empresasModel: {
          id: 19,
        },
        busesModel: {
          id: 1,
        },
        totalAcumulado: price,
      };

      agregarElemento(`${conteoxaumentar}`, requestData);
    }
  };

  const handleCustomInputSubmit = () => {
    // Maneja la entrada de texto personalizada y oculta el campo de entrada
    console.log("Texto ingresado personalizado:", customInputText);
    setMonto(`$${customInputText}`);
    setCustomInputVisible(false);
    setCustomInputText("");

    const requestData = {
      boletosModel: {
        id: selectedBoletoId,
      },
      empresasModel: {
        id: 19,
      },
      busesModel: {
        id: 1,
      },
      totalAcumulado: customInputText,
    };

    agregarElemento(`${conteoxaumentar}`, requestData);
  };

  const handleCancelCustomInput = () => {
    // Maneja el botón "Cancelar" y oculta el campo de entrada
    setCustomInputText(""); // Limpia el texto ingresado
    setCustomInputVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Boletos</Text>
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.boletosContainer}>
          {/*boletoOptions.map((item, index) => (
            <TouchableOpacity
              style={styles.caja}
              key={index}
              onPress={() => handleBoletoPress(item.title, item.price)}
            >
              <Text style={styles.textoBoleto}>{item.title}</Text>
              <Text style={styles.textoBoleto}>${item.price.toFixed(2)}</Text>
            </TouchableOpacity>
          ))*/}
          {datos &&
            datos.map((dato, index) => (
              <TouchableOpacity style={styles.caja} key={index} onPress={() => handleBoletoPress(dato.id, dato.nombre, dato.valor)}>
                <Text style={styles.textoBoleto}>{dato.nombre}</Text>
                <Text style={styles.textoBoleto}>${dato.valor}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
      <Text style={styles.montoText}>{monto}</Text>
      <Modal visible={isCustomInputVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Ingrese un texto personalizado:</Text>
          <TextInput style={styles.customTextInput} onChangeText={(text) => setCustomInputText(text)} value={customInputText} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.customButton} onPress={handleCustomInputSubmit}>
              <Text style={styles.buttonText}>Aceptar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customButton} onPress={handleCancelCustomInput}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    textAlign: "center",
  },
  boletosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    height: 400,
  },
  caja: {
    width: "40%",
    height: "22%",
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
  montoText: {
    fontSize: 20,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customTextInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  customButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    width: "40%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
