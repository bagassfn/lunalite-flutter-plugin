import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

import 'lunalite_sdk_platform_interface.dart';

/// An implementation of [LunaliteSdkPlatform] that uses method channels.
class MethodChannelLunaliteSdk extends LunaliteSdkPlatform {
  /// The method channel used to interact with the native platform.
  @visibleForTesting
  final methodChannel = const MethodChannel('lunalite_sdk');

  @override
  Future<String?> startServer(int port) async {
    return methodChannel.invokeMethod<String?>('startServer', port);
  }

  @override
  Future<void> stopServer() async {
    await methodChannel.invokeMethod('stopServer');
  }
}
