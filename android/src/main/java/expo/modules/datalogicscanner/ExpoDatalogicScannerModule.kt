package expo.modules.datalogicscanner

import android.util.Log
import com.datalogic.decode.BarcodeManager
import com.datalogic.decode.DecodeResult
import com.datalogic.decode.ReadListener
import com.datalogic.device.ErrorManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoDatalogicScannerModule : Module(), ReadListener {

  private var barcodeManager: BarcodeManager? = null

  override fun definition() = ModuleDefinition {
    Name("ExpoDatalogicScanner")

    Events("onBarcodeScanned")

    Function("startScan") {
      try {
        ErrorManager.enableExceptions(true)

        if (barcodeManager == null) {
          barcodeManager = BarcodeManager()
          barcodeManager?.addReadListener(this@ExpoDatalogicScannerModule)
        }
      } catch (e: Exception) {
        Log.e("MedScanner", "Failed to start scanner", e)
      }

      Unit
    }

    Function("stopScan") {
      try {
        barcodeManager?.removeReadListener(this@ExpoDatalogicScannerModule)
        barcodeManager?.stopDecode()
        barcodeManager = null
      } catch (e: Exception) {
        Log.e("MedScanner", "Failed to stop scanner", e)
      }

      Unit
    }
  } // <-- CLOSE definition() properly here

  // OUTSIDE definition()!
  override fun onRead(decodeResult: DecodeResult?) {
    decodeResult?.let {
      val scanData = it.text
      Log.d("MedScanner", "Scanned: $scanData")
      sendEvent("onBarcodeScanned", mapOf("scanData" to scanData))
    }
  }
}

