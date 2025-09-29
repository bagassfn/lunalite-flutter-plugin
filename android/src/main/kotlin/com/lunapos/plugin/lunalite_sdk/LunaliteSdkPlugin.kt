package com.lunapos.plugin.lunalite_sdk

import io.flutter.embedding.engine.plugins.FlutterPlugin
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel
import io.flutter.plugin.common.MethodChannel.MethodCallHandler
import io.flutter.plugin.common.MethodChannel.Result
import java.io.IOException

/** LunaliteSdkPlugin */
class LunaliteSdkPlugin :
    FlutterPlugin,
    MethodCallHandler {

    companion object {
        const val TAG = "LunaliteSdkPlugin"
    }

    private lateinit var channel: MethodChannel

    private lateinit var _localServer: LocalWebServer

    override fun onAttachedToEngine(flutterPluginBinding: FlutterPlugin.FlutterPluginBinding) {
        _localServer = LocalWebServer(flutterPluginBinding.applicationContext, port = 8981)

        channel = MethodChannel(flutterPluginBinding.binaryMessenger, "lunalite_sdk")
        channel.setMethodCallHandler(this)
    }

    override fun onMethodCall(
        call: MethodCall,
        result: Result
    ) {
        when (call.method) {
            "startServer" -> {
                if (!_localServer.isAlive) {
                    try {
                        _localServer.start()
                    } catch (e: IOException) {
                        result.error("5001", e.message, e)
                    }
                }

                result.success("http://127.0.0.1:${_localServer.listeningPort}/")
            }

            "stopServer" -> {
                if (_localServer.isAlive) {
                    _localServer.stop()
                }

                result.success(null)
            }

            else -> {
                result.notImplemented()
            }
        }
    }

    override fun onDetachedFromEngine(binding: FlutterPlugin.FlutterPluginBinding) {
        channel.setMethodCallHandler(null)
    }
}
