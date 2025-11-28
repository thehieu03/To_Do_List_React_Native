import { Stack } from "expo-router";

export default function RootLayoutNavigation() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="(tabs)" options={{ title: "Home"}} />
    </Stack>
  );
}
