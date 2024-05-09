import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export function MapaRuta() {
  const [mapReady, setMapReady] = useState(false);

  const handleMapReady = () => {
    setMapReady(true);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onMapReady={handleMapReady}
        initialRegion={
          mapReady
            ? {
                latitude: 37.78825, // Latitud inicial
                longitude: -122.4324, // Longitud inicial
                latitudeDelta: 0.0922, // Zoom
                longitudeDelta: 0.0421, // Zoom
              }
            : null
        }
      >
        {/* Marcador */}
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }} // Coordenadas del marcador
          title={"Mi Marcador"} // Título del marcador (opcional)
          description={"Descripción del marcador"} // Descripción del marcador (opcional)
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
