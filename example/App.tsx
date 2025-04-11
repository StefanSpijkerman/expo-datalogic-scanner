import { SafeAreaView, Text, View } from 'react-native';
import startScan, { } from "expo-datalogic-scanner";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{startScan()}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#eee',
  }
};
