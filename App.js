/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { auth } from './src/config/firebase';
import AuthScreen from './src/screens/AuthScreen';
import ChatScreen from './src/screens/ChatScreen';
import VoiceScreen from './src/screens/VoiceScreen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

// 設定 Google Sign-In
GoogleSignin.configure({
  webClientId: '607645274448-7iqmtodqfegrsro4q7khlk33mvgk7jv2.apps.googleusercontent.com',
});

function App() {
  const [user, setUser] = useState(null);
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    // 設定 Firebase Authentication 狀態監聽
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe(); // 清理監聽器
  }, []);

  // 主畫面 Tab Navigator
  const HomeNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1a73e8',
        tabBarInactiveTintColor: '#666',
      }}
    >
      <Tab.Screen 
        name="Chat" 
        component={ChatScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ backgroundColor: color, width: 24, height: 24, borderRadius: 12 }} />
          ),
        }}
      />
      <Tab.Screen 
        name="Voice" 
        component={VoiceScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ backgroundColor: color, width: 24, height: 24, borderRadius: 12 }} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {user ? (
            <Stack.Screen name="Home" component={HomeNavigator} />
          ) : (
            <Stack.Screen name="Auth" component={AuthScreen} />
          )}
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
