import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import './globals.css';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
    <StatusBar hidden={true}/>
    <Stack
      screenOptions={{
        headerTitleAlign: "center", 
        headerShown: false,
      }}
    >
      
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="movie/[id]"
        options={{ headerShown: false }}
      />
    </Stack>
    </GestureHandlerRootView>
  );
}
