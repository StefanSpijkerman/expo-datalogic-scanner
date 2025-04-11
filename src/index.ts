// Reexport the native module. On web, it will be resolved to ExpoDatalogicScannerModule.web.ts
// and on native platforms to ExpoDatalogicScannerModule.ts
import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import ExpoDatalogicScannerModule from "./ExpoDatalogicScannerModule";

const [barcode, setBarcode] = useState<string>();

useFocusEffect(
  useCallback(() => {
    const listener = ExpoDatalogicScannerModule.addListener(event => {
      const { scanData } = event;
      setBarcode(scanData);
      console.log('Scan data:', scanData);
    });

    ExpoDatalogicScannerModule.startScan();

    return () => {
      ExpoDatalogicScannerModule.stopScan();
      listener.remove();
    };
  }, []),
);

const startScan = () => ExpoDatalogicScannerModule.startScan();
const stopScan = () => ExpoDatalogicScannerModule.stopScan();

export default {
  startScan,
  stopScan,
};