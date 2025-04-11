import { useEffect, useState } from 'react';
import { Alert, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import DatalogicScanner from 'expo-datalogic-scanner';

export default function App() {
  const [barcode, setBarcode] = useState<string | null>(null);

  useEffect(() => {
    const subscription = DatalogicScanner.addListener(({ scanData }) => {
      console.log('Scanned barcode:', scanData);
      setBarcode(scanData);
      Alert.alert('Scanned', scanData);
    });

    DatalogicScanner.startScan();

    return () => {
      DatalogicScanner.stopScan();
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Ready to Scan...</Text>
        {barcode && (
          <Text style={styles.result}>Last scan: {barcode}</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});
