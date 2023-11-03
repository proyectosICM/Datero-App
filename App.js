
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';
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
