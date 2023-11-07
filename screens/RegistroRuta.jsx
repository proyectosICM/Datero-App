import React from "react";
import { ScrollView, Text, View } from "react-native";
import { general } from "../styles/General";
import { useState } from "react";
import { useListarElementos } from "../Hooks/CRUDHooks";
import { registrorutaxbus } from "../API/apiurls";

export function RegistroRuta() {
  const [datos, setDatos] = useState();
  const rutaid = 2;
  const busid = 1;
  useListarElementos(`${registrorutaxbus}${busid}`, setDatos);

  return (
    <View style={general.pantallaCambianteContainer}>
      <Text style={general.titleText}>Registro de ruta</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>Placa</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>Paradero</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>Hora esperada</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>Hora Llegada</Text>
        </View>
      </View>

      <ScrollView style={{ height: "100%", width: "100%" }}>
        {datos &&
          datos.map((dato) => (
            <View key={dato.id} style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "center" }}>{dato.busesModel.placa}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "center" }}>{dato.paraderosModel.nombre}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "center" }}>{dato.horaEsperada}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "center" }}>{dato.horaLlegada}</Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}
