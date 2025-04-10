package expo.modules.datalogicscanner

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class ExpoDatalogicScannerModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoDatalogicScanner")

    Function("hello") {
      "Hello world! 👋"
    }
  }
}
