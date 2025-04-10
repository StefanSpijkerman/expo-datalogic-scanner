// Reexport the native module. On web, it will be resolved to ExpoDatalogicScannerModule.web.ts
// and on native platforms to ExpoDatalogicScannerModule.ts
import ExpoDatalogicScannerModule from "./ExpoDatalogicScannerModule";

export function hello(): string {
  return ExpoDatalogicScannerModule.hello();
}