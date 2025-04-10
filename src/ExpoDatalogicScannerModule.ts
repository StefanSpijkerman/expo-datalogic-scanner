import { NativeModule, requireNativeModule } from 'expo';

import { ExpoDatalogicScannerModuleEvents } from './ExpoDatalogicScanner.types';

declare class ExpoDatalogicScannerModule extends NativeModule<ExpoDatalogicScannerModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoDatalogicScannerModule>('ExpoDatalogicScanner');
