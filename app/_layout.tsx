// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }
    // 라우팅은 여기서 하기
    return (
        // 여기서 테마색상 설정 가능 (다크모드 on/off도 가능할듯)
        <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: '#351401' },
                    headerTitleStyle: { color: '#ffffff' },
                    headerTintColor: '#ffffff',
                    contentStyle: { backgroundColor: '#512406' },
                }}
            >
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: true,
                        title: '카테고리',
                    }}
                />
                <Stack.Screen
                    name="screen/mealsOverviewScreen"
                    options={{
                        headerShown: true,
                        title: '상세 카테고리',
                    }}
                />
                <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
            </Stack>
        </ThemeProvider>
    );
}
