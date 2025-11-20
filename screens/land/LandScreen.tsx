import LandView from "@/app/land/LandView";
import { Colors } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const LandScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.primary500 }}>
      <LandView />
    </SafeAreaView>
  );
};
export default LandScreen;
