import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

class DummyWebPage extends StatefulWidget {
  const DummyWebPage({super.key});

  @override
  State<DummyWebPage> createState() => _DummyWebPageState();
}

class _DummyWebPageState extends State<DummyWebPage> {
  final _webPort = 61290;
  String get _rootWebPath => 'http://192.168.1.2:$_webPort/';

  InAppWebViewController? _webViewController;

  String _currentUrl = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: InAppWebView(
          initialUrlRequest: URLRequest(url: WebUri(_rootWebPath)),
          initialSettings: InAppWebViewSettings(
            javaScriptEnabled: true,
            sharedCookiesEnabled: true,
            thirdPartyCookiesEnabled: true,
            clearCache: false,
            allowsBackForwardNavigationGestures: true,
          ),
          onPermissionRequest: (controller, permissionRequest) async {
            return PermissionResponse(
              resources: permissionRequest.resources,
              action: PermissionResponseAction.GRANT,
            );
          },
          onWebViewCreated: (controller) {
            _webViewController = controller;
          },
          onUpdateVisitedHistory: (controller, url, isReload) {
            setState(() {
              _currentUrl = url?.toString() ?? "";
            });
          },
        ),
      ),
    );
  }
}
