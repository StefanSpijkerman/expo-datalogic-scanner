import { registerWebModule, NativeModule } from 'expo';

import { ExpoDatalogicScannerModuleEvents } from './ExpoDatalogicScanner.types';

class ExpoDatalogicScannerModule extends NativeModule<ExpoDatalogicScannerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoDatalogicScannerModule);
