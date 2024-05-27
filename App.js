import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style={styles.boldName}>Danso Dacosta</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
    fontWeight: '350'
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: '#aaaaff'
  },
  boldName: {
    fontWeight: '800'
  }
});
