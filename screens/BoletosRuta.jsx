import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { general } from '../styles/General';
import { BotonCard } from './../styles/PaletaDeColores';

export function BoletosRuta() {
  const boletoOptions = [
    { title: 'Escolar', price: 0.50, color: '#FF5733' },
    { title: 'Medio', price: 1.50, color: '#33FF57' },
    { title: 'Zonal', price: 1.50, color: '#5733FF' },
    { title: 'Urbano', price: 2.00, color: '#FF5733' },
    { title: 'Completo', price: 3.00, color: '#33FF57' },
  ];

  const handleBoletoPress = (price) => {
    console.log(`Boleto seleccionado: ${price}`);
  };

  let numColumns = 2;

  if (boletoOptions.length === 1) {
    numColumns = 1; // Cuando solo hay un elemento, usar una sola columna
  }

  return (
    <View style={general.boletosContainer}>
      <Text style={general.titleText}>Boletos</Text>
      <FlatList
        data={boletoOptions}
        numColumns={numColumns}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card containerStyle={{ backgroundColor: item.color }}>
            <Text style={{ textAlign: 'center' }}>{item.title}</Text>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
              ${item.price.toFixed(2)}
            </Text>
            <Button
              title="Seleccionar"
              buttonStyle={{ backgroundColor: BotonCard }}
              titleStyle={{ color: 'white' }}
              onPress={() => handleBoletoPress(item.price)}
            />
          </Card>
        )}
      />
    </View>
  );
}
