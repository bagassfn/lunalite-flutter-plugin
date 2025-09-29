import 'package:flutter/material.dart';
import 'package:lunalite_sdk/page/luna_inappbrowser.dart';

import 'lunalite_sdk_platform_interface.dart';

class LunaliteSdk {
  LunaliteSdkPlatform get instance => LunaliteSdkPlatform.instance;

  Future<String?> startServer({int port = 8981}) {
    return LunaliteSdkPlatform.instance.startServer(port);
  }

  Future<void> stopServer() {
    return LunaliteSdkPlatform.instance.stopServer();
  }

  Future<void> startLunaSDK(BuildContext context) async {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) => LunaInappbrowser(lunaPlugin: this),
      ),
    );
  }
}
