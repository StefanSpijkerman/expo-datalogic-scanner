import ExpoModulesCore

public class ExpoDatalogicScannerModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoDatalogicScanner")

    Function("startScan") {
      return "Scanning is not supported on IOS!"
    }

    Function("stopScan") {
      return "Scanning is not supported on IOS!"
    }
  }
}
