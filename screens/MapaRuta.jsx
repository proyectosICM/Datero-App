import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { general } from "../styles/General";
import { useState } from "react";
import MapView from "react-native-maps";

export function MapaRuta() {
    const [mapReady, setMapReady] = useState(false);

    const handleMapReady = () => {
      setMapReady(true);
    };
  
  return (
    <View style={general.container}>
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
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      height: "100%"
    },
  });