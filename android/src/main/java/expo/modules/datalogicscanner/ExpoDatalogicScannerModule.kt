package expo.modules.datalogicscanner

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL
import com.datalogic.decode.BarcodeManager
import com.datalogic.device.ErrorManager
import android.util.Log
import com.datalogic.decode.DecodeResult
import com.datalogic.decode.ReadListener


class ExpoDatalogicScannerModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoDatalogicScanner")

    Events("onBarcodeScanned")

    Function("startScan") {
      try {
        ErrorManager.enableExceptions(true)
        barcodeManager = BarcodeManager()
        barcodeManager?.addReadListener(this)
      } catch (e: Exception) {
        Log.e("MedScanner", "Failed to start scanner", e)
      }
    }

    Function("stopScan") {
      try {
        barcodeManager?.removeReadListener(this)
        barcodeManager?.stopDecode()
        barcodeManager = null
      } catch (e: Exception) {
        Log.e("MedScanner", "Failed to stop scanner", e)
      }
    }
  }

  override fun onRead(decodeResult: DecodeResult?) {
    decodeResult?.let {
      val scanData = it.text
      Log.d("MedScanner", "Scanned: $scanData")
      // Emit event to JS side
      sendEvent("onBarcodeScanned", mapOf("scanData" to scanData))
    }
  }
}
