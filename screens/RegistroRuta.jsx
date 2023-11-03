import React from 'react';
import { Text, View } from 'react-native';
import { general } from '../styles/General';

export function RegistroRuta() {
  return (
    <View style={general.pantallaCambianteContainer}>
      <Text style={general.titleText}>Registro de ruta</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Placa</Text>
          <Text style={{ textAlign: 'center' }}>ABC-456</Text>
          <Text style={{ textAlign: 'center' }}>ABC-456</Text>
          <Text style={{ textAlign: 'center' }}>ABC-456</Text>
          <Text style={{ textAlign: 'center' }}>ABC-456</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Paradero</Text>
          <Text style={{ textAlign: 'center' }}>Pte Atocongo</Text>
          <Text style={{ textAlign: 'center' }}>Primavera</Text>
          <Text style={{ textAlign: 'center' }}>Perales</Text>
          <Text style={{ textAlign: 'center' }}>Pte Nuevo</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Hora esperada</Text>
          <Text style={{ textAlign: 'center' }}>08:05</Text>
          <Text style={{ textAlign: 'center' }}>08:35</Text>
          <Text style={{ textAlign: 'center' }}>09:12</Text>
          <Text style={{ textAlign: 'center' }}>09:24</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Hora Llegada</Text>
          <Text style={{ textAlign: 'center' }}>08:10</Text>
          <Text style={{ textAlign: 'center' }}>08:40</Text>
          <Text style={{ textAlign: 'center' }}>09:18</Text>
          <Text style={{ textAlign: 'center' }}>09:30</Text>
        </View>
      </View>
    </View>
  );
}
