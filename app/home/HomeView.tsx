import { Colors } from "@/constants/theme";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeCheckList from "./_components/HomeCheckList";

const HomeView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>체크 리스트</Text>
      <HomeCheckList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: Colors.light.primary500,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f1f1f",
  },
});
export default HomeView;
