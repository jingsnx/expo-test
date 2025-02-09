import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import 'react-native-reanimated';
import VibrateButton from '@/components/vibrate';
import VibratePressable from '@/components/VibratePressable';
import Pulsating from '@/components/Pulse';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  const styles = StyleSheet.create({
    container:{
      backgroundColor: '#191919',
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
  },
  });
  return (
    <View style={styles.container}>
      <Pulsating color={'#0338FE'} width={200} height={200} visible={true}>
        <VibratePressable pattern = {1000}/>
      </Pulsating>
      
    </View>
  );
}
