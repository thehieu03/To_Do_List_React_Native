import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

// Helper functions for tab bar icons - defined outside component to avoid recreation
const TodoIcon = ({ color, size }: { color: string; size: number }) => {
  return <Ionicons name="flash-outline" color={color} size={size} />;
};

const SettingsIcon = ({ color, size }: { color: string; size: number }) => {
  return <Ionicons name="settings-outline" color={color} size={size} />;
};

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        tabBarStyle: {
          backgroundColor: "#1e293b",
          borderTopWidth: 1,
          borderTopColor: "yellow",
          height: 90,
          paddingBottom: 30,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 4,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todo",
          tabBarIcon: TodoIcon,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          tabBarIcon: SettingsIcon,
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
