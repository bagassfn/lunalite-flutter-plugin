import 'package:plugin_platform_interface/plugin_platform_interface.dart';

import 'lunalite_sdk_method_channel.dart';

abstract class LunaliteSdkPlatform extends PlatformInterface {
  /// Constructs a LunaliteSdkPlatform.
  LunaliteSdkPlatform() : super(token: _token);

  static final Object _token = Object();

  static LunaliteSdkPlatform _instance = MethodChannelLunaliteSdk();

  /// The default instance of [LunaliteSdkPlatform] to use.
  ///
  /// Defaults to [MethodChannelLunaliteSdk].
  static LunaliteSdkPlatform get instance => _instance;

  /// Platform-specific implementations should set this with their own
  /// platform-specific class that extends [LunaliteSdkPlatform] when
  /// they register themselves.
  static set instance(LunaliteSdkPlatform instance) {
    PlatformInterface.verifyToken(instance, _token);
    _instance = instance;
  }

  Future<String?> startServer(int port) {
    throw UnimplementedError();
  }

  Future<void> stopServer() {
    throw UnimplementedError();
  }
}
