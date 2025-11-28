import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Box 2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>Box 3</Text>
      </View>
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
