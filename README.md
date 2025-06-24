# YCM_AI 專案說明

## 專案簡介
YCM 面試第二階段的題目

## 技術棧
- **前端框架**: React Native 0.80.0
- **路由管理**: React Navigation (v7)
- **認證系統**: 
  - Firebase Authentication
  - Google Sign-In
- **AI 相關**:
  - OpenAI API 集成
  - 語音轉文字 (@react-native-voice/voice)
  - 文字轉語音 (react-native-tts)
- **UI 組件**:
  - react-native-vector-icons
  - react-native-safe-area-context
  - react-native-screens

## 資料夾結構
```
YCM_AI/
├── android/              # Android 專案相關檔案
├── ios/                 # iOS 專案相關檔案
├── src/                # 源碼目錄
│   └── config/        # 配置檔案
├── __tests__/         # 測試檔案
└── 其他配置檔案
```

## 安裝與執行

### 1. 安裝依賴
```bash
npm install
```

### 2. 套件修補
在安裝完依賴後，需要對以下套件進行手動修補：

#### @react-native-voice/voice
移除 `node_modules/@react-native-voice/voice/android/build.gradle` 第65行：
```gradle
// implementation "com.android.support:appcompat-v7:${supportVersion}"
```

#### react-native-tts
移除 `node_modules/react-native-tts/android/build.gradle` 中的 `buildscript` 區塊：
```gradle
// buildscript {
//     repositories {
//         jcenter()
//     }
// 
//     dependencies {
//         classpath 'com.android.tools.build:gradle:1.3.1'
//     }
// }
```

### 3. 啟動 Metro Bundler
```bash
npm start
```

### 4. 運行應用程式

#### Android
```bash
npm run android
```

#### iOS
```bash
# 安裝 CocoaPods 依賴
bundle install
bundle exec pod install

# 執行應用程式
npm run ios
```

## 開發環境需求
- Node.js >= 18
- React Native CLI
- Android Studio (Android 開發)
- Xcode (iOS 開發)
- CocoaPods (iOS 開發)

## 使用說明

### 修改應用程式
1. 在 `App.js` 中進行主要的應用程式修改
2. 使用 Metro Bundler 的熱重載功能自動更新應用程式
3. 如需強制重新載入，可使用以下方式：
   - Android: 在模擬器中按 R 鍵兩次
   - iOS: 在 iOS Simulator 中按 R 鍵

## 疑難排解
如果在執行過程中遇到問題，請參閱 React Native 官方文檔的疑難排解指南：
https://reactnative.dev/docs/troubleshooting

## 學習資源
- React Native 官方網站: https://reactnative.dev
- React Native 文檔: https://reactnative.dev/docs/getting-started
- React Native GitHub 倉庫: https://github.com/facebook/react-native
