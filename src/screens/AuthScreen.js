import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { auth } from '../config/firebase';
import { GoogleAuthProvider } from '@react-native-firebase/auth';

function AuthScreen({ navigation }) {
  const signIn = async () => {
    try {
      // 檢查是否已經登入
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      
      // 使用 Google ID Token 建立 Firebase 凭證
      const googleCredential = GoogleAuthProvider.credential(idToken);
      
      // 使用憑證登入 Firebase
      await auth.signInWithCredential(googleCredential);
      
      // 登入成功後導向主畫面
      navigation.replace('Home');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YCM AI</Text>
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>使用 Google 登入</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1a73e8',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AuthScreen;
