# Luna POS Lite SDK


Luna POS Lite SDK ini hanya support flutter project dengan platform:

- Android
- iOS

## Tambahkan Dependency di Project

Tambahakan dependency pada `pubspec.yaml` anda, seperti contoh berikut:

```yaml
dependencies:
  flutter:
    sdk: flutter

  cupertino_icons: ^1.0.8
  
  # Tambahkan sdk Luna POS dibawah ini
  lunalite_sdk:
    git:
      url: https://github.com/bagassfn/lunalite-flutter-plugin.git
      ref: v1.0.2 # tag versi yang ingin digunakan
      # jika menggunakan versi denga akhiran -dev (misal: v1.0.1-dev)
      # berarti anda sedang menggunakan environment dev dari SDK
```

## Menjalankan Luna SDK

Jalankan Luna SDK dengan cara seperti dibawah ini:

### Import plugin

```dart
import 'package:lunalite_sdk/lunalite_sdk.dart';
```

### Menjalankan SDK

Untuk menjalankan SDK cukup memanggil function `LunaliteSdk().startLunaSDK()` , seperti di bawah ini:

```dart

class HomePage extends StatelessWidget {
  HomePage({super.key});

  //** Deklarasi plugin Luna SDK */
  final _lunaSdk = LunaliteSdk();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: FilledButton(
          onPressed: () {
            //** Jalankan SDK */
            _lunaSdk.startLunaSDK(context);
          },
          child: Text('Start Luna SDK'),
        ),
      ),
    );
  }
}
```

## Setup Native Environment

### Android Setup

1. Buka file **AndroidManifest.xml** di folder Android, biasa-nya ada di path ini: `flutter_project_path/android/app/src/main/AndroidManifest.xml` .
2. Pada section `<application />` , Jika `android:usesCleartextTraffic` tidak di set sebagai `true` , maka anda mungkin pernah menambahkan property `android:networkSecurityConfig`  . Seperti contoh dibawah:
    
    ```xml
    <application
            android:label="plugin_impl"
            android:name="${applicationName}"
            android:icon="@mipmap/ic_launcher"
            
            android:networkSecurityConfig="@xml/network_security_configs"
            >
            
            ...
            
    </application>
    ```
    
    Jika anda belum pernah menambahkan property `android:networkSecurityConfig`  di AndroidManifest.xml, maka tidak perlu melanjutkan ke step selanjutnya dan bisa langsung running project seperti biasa.
    
    Jika sudak pernah menambahkan properti `android:networkSecurityConfig` maka lanjut ke step 3.
    
3. Buka file `xml` yang digunakan pada properti `android:networkSecurityConfig` , biasanya ada di direktori ini: `flutter_project_path/android/app/src/main/res/xml/your_security_config.xml` .
Lalu tambahkan section berikut:
    
    ```xml
    <network-security-config>
    		// configuration applikasi anda
    		...
    		
    		// tambahkan code ini
        <domain-config cleartextTrafficPermitted="true">
            <domain includeSubdomains="true">127.0.0.1</domain>
        </domain-config>
        
    </network-security-config>
    ```
    

### iOS Setup

Jika SDK tidak berjalan dengan baik di platform iOS, maka anda perlu menambahkan setup sebagai berikut.

1. Buka file `Info.plist` , biasanya ada di path ini: `your_flutter_project_path/ios/Runner/Info.plist` 

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
        
        // Konfigurasi project anda disini
        ...
        
        // Tambahkan properti ini
        <key>NSAppTransportSecurity</key>
        <dict>
            <key>NSAllowsArbitraryLoads</key>
            <true/>
            <key>NSAllowsLocalNetworking</key>
            <true/>
        </dict>
        // Berakhir di sini
        
    </dict>
    </plist>

    ```