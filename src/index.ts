// Reexport the native module. On web, it will be resolved to ExpoDatalogicScannerModule.web.ts
// and on native platforms to ExpoDatalogicScannerModule.ts
export { default } from './ExpoDatalogicScannerModule';
export { default as ExpoDatalogicScannerView } from './ExpoDatalogicScannerView';
export * from  './ExpoDatalogicScanner.types';
