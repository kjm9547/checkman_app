import SignupFunnel from "@/app/auth/SignupFunnel";
import { Colors } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
const SignupScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.primary500 }}>
      <SignupFunnel />
    </SafeAreaView>
  );
};
export default SignupScreen;
