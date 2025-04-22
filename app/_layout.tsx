import Initiallayout from '@/components/Initiallayout';
import ClerkAndConvexProvider from '@/providers/ClerkAndConvexProvider';
import { SplashScreen } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';
import { useCallback, useEffect } from 'react';
import * as Navigation from 'expo-navigation-bar';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';



export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (!fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  useEffect(() => {
    if (Platform.OS === "android"){
      Navigation.setBackgroundColorAsync("#000000");
      Navigation.setButtonStyleAsync("light");
    }
  }, []);

  return (
    <ClerkAndConvexProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} onLayout={onLayoutRootView}>
          <Initiallayout />
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </ClerkAndConvexProvider>
  );
}
