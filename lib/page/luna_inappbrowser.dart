import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:lunalite_sdk/lunalite_sdk.dart';

class LunaInappbrowser extends StatefulWidget {
  final LunaliteSdk lunaPlugin;
  const LunaInappbrowser({super.key, required this.lunaPlugin});

  @override
  State<LunaInappbrowser> createState() => _LunaInappbrowserState();
}

class _LunaInappbrowserState extends State<LunaInappbrowser> {
  InAppWebViewController? _webViewController;

  String? _rootWebPath;
  String _currentUrl = "";

  @override
  void initState() {
    super.initState();
    _startServer();
  }

  Future<void> _startServer() async {
    final url = await widget.lunaPlugin.startServer();
    setState(() {
      _rootWebPath = url;
    });
  }

  @override
  void dispose() {
    widget.lunaPlugin.stopServer();
    super.dispose();
  }

  Future<void> _handleBackPressed(BuildContext context) async {
    if (_currentUrl.isEmpty || _currentUrl.endsWith("/")) {
      return;
    }
    if (_currentUrl.endsWith("/home") || _currentUrl.endsWith("/auth")) {
      Navigator.of(context).pop();
    } else {
      if (_webViewController != null && await _webViewController!.canGoBack()) {
        await _webViewController!.goBack();
      } else {
        if (context.mounted) {
          Navigator.of(context).pop();
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (didPop, result) async {
        if (didPop) return;

        _handleBackPressed(context);
      },
      child: Scaffold(
        appBar: Platform.isIOS
            ? AppBar(
                automaticallyImplyLeading: false,
                leading: BackButton(
                  onPressed: () {
                    _handleBackPressed(context);
                  },
                ),
              )
            : null,
        backgroundColor: Colors.white,
        body: SafeArea(
          child: _rootWebPath == null
              ? Center(child: CircularProgressIndicator())
              : InAppWebView(
                  initialUrlRequest: URLRequest(url: WebUri(_rootWebPath!)),
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
                    print(
                      "onUpdateVisitedHistory(): Url = ${url?.toString()}, isReload? $isReload",
                    );
                    setState(() {
                      _currentUrl = url?.toString() ?? "";
                    });
                  },
                ),
        ),
      ),
    );
  }
}
