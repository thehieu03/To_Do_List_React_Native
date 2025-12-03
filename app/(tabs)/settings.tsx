import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SettingsScreeen = () => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreeen</Text>
    </View>
  );
};

export default SettingsScreeen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
    gap: 10,
  },
});
