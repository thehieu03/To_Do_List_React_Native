import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme from "@/hooks/useTheme";

export default function Index() {
  const router = useRouter();
  const {toggleDarkMode} = useTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  box1: {
    width: 80,
    height: 80,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  text: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
