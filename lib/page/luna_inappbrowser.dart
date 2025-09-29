import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:lunalite_sdk/lunalite_sdk.dart';
import 'package:url_launcher/url_launcher.dart';

class LunaInappbrowser extends StatefulWidget {
  final LunaliteSdk lunaPlugin;
  const LunaInappbrowser({super.key, required this.lunaPlugin});

  @override
  State<LunaInappbrowser> createState() => _LunaInappbrowserState();
}

class _LunaInappbrowserState extends State<LunaInappbrowser> {
  InAppWebViewController? _webViewController;

  String? _rootWebPath;
  String _currentUrl = '';

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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: Platform.isIOS
          ? AppBar(
              automaticallyImplyLeading: false,
              leading: Builder(
                builder: (context) {
                  return BackButton(
                    onPressed: () {
                      _handleBackPressed(context);
                    },
                  );
                },
              ),
            )
          : null,
      backgroundColor: Colors.white,
      body: Builder(
        builder: (context) {
          return PopScope(
            canPop: false,
            onPopInvokedWithResult: (didPop, result) async {
              if (didPop) return;

              _handleBackPressed(context);
            },
            child: SafeArea(
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
                      onPermissionRequest:
                          (controller, permissionRequest) async {
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
                          _currentUrl = url?.toString() ?? '';
                        });
                      },
                      shouldOverrideUrlLoading:
                          (controller, navigationAction) async {
                            final uri = navigationAction.request.url;

                            if (uri == null) {
                              return NavigationActionPolicy.ALLOW;
                            }

                            if ([
                              'https://api.whatsapp.com',
                              'https://lunapos.id',
                              'https://www.youtube.com',
                            ].contains(uri.origin)) {
                              if (await canLaunchUrl(uri)) {
                                await launchUrl(
                                  uri,
                                  mode: LaunchMode.externalApplication,
                                );
                              }
                              return NavigationActionPolicy.CANCEL;
                            }

                            return NavigationActionPolicy.ALLOW;
                          },
                    ),
            ),
          );
        },
      ),
    );
  }

  Future<void> _handleBackPressed(BuildContext context) async {
    if (_currentUrl.isEmpty || _currentUrl.endsWith('/')) {
      return;
    }
    if (_currentUrl.endsWith('/home') || _currentUrl.endsWith('/auth')) {
      Navigator.of(context).pop();
    } else {
      if (!_currentUrl.endsWith('/payment')) {
        _showDialogBackToHome(context);
      }
      // if (_webViewController != null && await _webViewController!.canGoBack()) {
      //   await _webViewController!.goBack();
      // } else {
      //   if (context.mounted) {
      //     Navigator.of(context).pop();
      //   }
      // }
    }
  }

  void _showDialogBackToHome(BuildContext context) {
    void redirectToHome() {
      _webViewController?.loadUrl(
        urlRequest: URLRequest(url: WebUri("$_rootWebPath#/home")),
      );
    }

    final safeArea = MediaQuery.of(context).padding;

    showModalBottomSheet(
      context: context,
      backgroundColor: Colors.white,
      builder: (context) {
        return Container(
          padding: EdgeInsets.all(16).copyWith(bottom: safeArea.bottom + 16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Align(
                alignment: Alignment.center,
                child: Icon(Icons.info, color: Colors.blue, size: 62),
              ),
              Padding(
                padding: EdgeInsets.only(top: 12),
                child: Text(
                  'Ingin kembali ke halaman Dashboard?',
                  textAlign: TextAlign.center,

                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
                ),
              ),
              SizedBox(height: 24),
              Row(
                children: [
                  Expanded(
                    child: FilledButton(
                      onPressed: () {
                        Navigator.pop(context);
                        redirectToHome();
                      },
                      child: Text('Iya'),
                    ),
                  ),
                  SizedBox(width: 16),
                  Expanded(
                    child: OutlinedButton(
                      onPressed: () => Navigator.pop(context),
                      child: Text('Tidak'),
                    ),
                  ),
                ],
              ),
            ],
          ),
        );
      },
    );
  }
}
