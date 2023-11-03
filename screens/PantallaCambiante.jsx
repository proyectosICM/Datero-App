import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { general } from '../styles/General';
import { MapaRuta } from './MapaRuta'; // Importa el componente MapaRuta
import { RegistroRuta } from './RegistroRuta'; // Importa el componente RegistroRuta

export function PantallaCambiante() {
  const [pantallaActual, setPantallaActual] = useState('mapa'); // Estado local para controlar qué componente mostrar

  const handleMapa = () => {
    setPantallaActual('mapa');
  };

  const handleRegistros = () => {
    setPantallaActual('registros');
  };

  // Renderiza el componente correspondiente en función de pantallaActual
  const renderComponente = () => {
    if (pantallaActual === 'mapa') {
      return <MapaRuta />;
    } else if (pantallaActual === 'registros') {
      return <RegistroRuta />;
    } else {
      return <Text>Pantalla Cambiante</Text>;
    }
  };

  return (
    <View style={general.pantallaCambianteContainer}>
      <View style={general.panel}>{renderComponente()}</View>
      <View style={general.botonesContainer}>
        <TouchableOpacity style={general.boton} onPress={handleMapa}>
          <Text>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={general.boton} onPress={handleRegistros}>
          <Text>Registros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
