import { Stack } from "expo-router";
import { ThemeProvider } from "../hooks/useTheme";
export default function RootLayoutNavigation() {
  return (
    <ThemeProvider initialTheme="light">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ title: "Home" }} />
      </Stack>
    </ThemeProvider>
  );
}
