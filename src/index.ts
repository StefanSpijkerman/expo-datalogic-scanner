import { EventEmitter } from 'expo-modules-core';
import ExpoDatalogicScannerModule from './ExpoDatalogicScannerModule';

type DatalogicScannerEvents = {
  onBarcodeScanned: (event: { scanData: string }) => void;
};

const emitter = new EventEmitter<DatalogicScannerEvents>(ExpoDatalogicScannerModule);

const addListener = (callback: (event: { scanData: string }) => void) => {
  return emitter.addListener('onBarcodeScanned', callback);
};

const startScan = () => ExpoDatalogicScannerModule.startScan();
const stopScan = () => ExpoDatalogicScannerModule.stopScan();

export default {
  addListener,
  startScan,
  stopScan,
};
