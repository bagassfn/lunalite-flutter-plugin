import 'package:flutter_test/flutter_test.dart';
import 'package:lunalite_sdk/lunalite_sdk_platform_interface.dart';
import 'package:lunalite_sdk/lunalite_sdk_method_channel.dart';
import 'package:plugin_platform_interface/plugin_platform_interface.dart';

class MockLunaliteSdkPlatform
    with MockPlatformInterfaceMixin
    implements LunaliteSdkPlatform {
  @override
  Future<String?> startServer(int port) {
    // TODO: implement startServer
    throw UnimplementedError();
  }

  @override
  Future<void> stopServer() {
    // TODO: implement stopServer
    throw UnimplementedError();
  }
}

void main() {
  final LunaliteSdkPlatform initialPlatform = LunaliteSdkPlatform.instance;

  test('$MethodChannelLunaliteSdk is the default instance', () {
    expect(initialPlatform, isInstanceOf<MethodChannelLunaliteSdk>());
  });
}
