import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CustomBottomTabBar } from './CustomBottomTabBar';
import Orientation from 'react-native-orientation';
import { useEffect } from 'react';
import { BoletosRuta } from './screens/BoletosRuta';
import { PantallaCambiante } from './screens/PantallaCambiante';

export default function App() {


  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <PantallaCambiante />
      <BoletosRuta />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
});
