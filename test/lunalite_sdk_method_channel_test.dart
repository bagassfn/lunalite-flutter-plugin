import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:lunalite_sdk/lunalite_sdk_method_channel.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  // ignore: unused_local_variable
  MethodChannelLunaliteSdk platform = MethodChannelLunaliteSdk();
  const MethodChannel channel = MethodChannel('lunalite_sdk');

  setUp(() {
    TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
        .setMockMethodCallHandler(channel, (MethodCall methodCall) async {
          return '42';
        });
  });

  tearDown(() {
    TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
        .setMockMethodCallHandler(channel, null);
  });
}
