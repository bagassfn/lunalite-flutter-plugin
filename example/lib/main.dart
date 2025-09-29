import 'package:flutter/material.dart';

import 'package:go_router/go_router.dart';
import 'package:lunalite_sdk/lunalite_sdk.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: GoRouter(
        initialLocation: '/',
        routes: [
          GoRoute(path: '/', builder: (context, state) => HomePage()),
          GoRoute(path: '/profile', builder: (context, state) => ProfilePage()),
        ],
      ),
    );
  }
}

class HomePage extends StatelessWidget {
  HomePage({super.key});

  final _lunaSdk = LunaliteSdk();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text('Home Screen', style: TextStyle(fontSize: 24)),
            SizedBox(height: 16),
            FilledButton(
              onPressed: () {
                context.push('/profile');
              },
              child: Text('Move To Profile'),
            ),
            FilledButton(
              onPressed: () {
                //*
                //** Jalankan Luna SDK */
                //*
                _lunaSdk.startLunaSDK(context);
              },
              child: Text('Open Luna SDK'),
            ),
          ],
        ),
      ),
    );
  }
}

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Profile')),
      body: Center(child: Text('Profile Screen')),
    );
  }
}
