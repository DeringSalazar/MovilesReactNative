import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import 'react-native-reanimated';
import SplashScreen from '../components/Splashscreen';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [ready, setReady] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('splashShown') === 'true';
    }
    return false;
  });

  return (
    <> 
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
                <Stack.Screen name="pdf-viewer" options={{ title: 'Catálogo' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>

      {!ready && (
        <SplashScreen
          onFinish={() => {
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('splashShown', 'true');
            }
            setReady(true);
          }}
          duration={2500}
        />
      )}
    </>
  );
}