import Flutter
import GCDWebServer
import UIKit

public class LunaliteSdkPlugin: NSObject, FlutterPlugin {
    var webServer: GCDWebServer?

    public static func register(with registrar: FlutterPluginRegistrar) {
        let channel = FlutterMethodChannel(
            name: "lunalite_sdk",
            binaryMessenger: registrar.messenger()
        )
        let instance = LunaliteSdkPlugin()
        registrar.addMethodCallDelegate(instance, channel: channel)
    }

    public func handle(
        _ call: FlutterMethodCall,
        result: @escaping FlutterResult
    ) {
        switch call.method {
        case "startServer":
            let url = startServer()
            result(url)

        case "stopServer":
            webServer?.stop()
            webServer = nil
            result(nil)
        default:
            result(FlutterMethodNotImplemented)
        }
    }

    private func startServer() -> String {
        if webServer == nil {
            webServer = GCDWebServer()
            if let bundle = Bundle(for: LunaliteSdkPlugin.self) as Bundle?,
                let resourceURL = bundle.url(
                    forResource: "lunalite_sdk",
                    withExtension: "bundle"
                ),
                let webPath = Bundle(url: resourceURL)?.resourcePath?.appending(
                    "/lunasdk"
                )
            {

                webServer?.addGETHandler(
                    forBasePath: "/",
                    directoryPath: webPath,
                    indexFilename: "index.html",
                    cacheAge: 3600,
                    allowRangeRequests: true
                )
                try? webServer?.start(options: [
                    GCDWebServerOption_Port: 0,
                    GCDWebServerOption_BindToLocalhost: true,
                ])
            }
        }
        let port = webServer?.port ?? 0
        let address =
            webServer?.serverURL?.absoluteString ?? "http://127.0.0.1:\(port)/"

        return address
    }
}
