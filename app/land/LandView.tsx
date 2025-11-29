import { lotties } from "@/constants/assets";
import { Colors } from "@/constants/theme";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const LandView = () => {
  const animation = useRef<LottieView>(null);
  const { loginUser } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    pw: "",
  });
  const loginClickHandler = async () => {
    await loginUser(formData);
    router.push("/(tabs)/explore");
  };

  const formInputHandler = (type: string, text: string) => {
    setFormData({ ...formData, [type]: text });
  };

  const signupClickHandler = () => {
    router.push("/auth/SignupFunnel");
  };
  const testClickHandler = () => {
    router.push("/(tabs)/explore");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.primary500 }}>
      <View style={stlyes.constainer}>
        <Text style={stlyes.title}>CHECK MAN</Text>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: "80%",
            height: "50%",
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={{ uri: lotties.checkman }}
        />
        <View style={stlyes.input_container}>
          <TextInput
            label="Email"
            mode="outlined"
            value={formData.email}
            onChangeText={(text) => formInputHandler("email", text)}
          />
          <TextInput
            label="pw"
            mode="outlined"
            value={formData.pw}
            onChangeText={(text) => formInputHandler("pw", text)}
          />
          <View className="mt-2">
            <Button
              mode="contained"
              onPress={loginClickHandler}
              buttonColor={Colors.light.black500}
              textColor="white"
            >
              로그인하기
            </Button>
          </View>
          <TouchableOpacity onPress={signupClickHandler}>
            <Text className="mt-4 w-auto color-[#262626] self-center">
              아직 계정이 없으신가요?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={testClickHandler}>
            <Text className="mt-4 w-auto color-[#262626] self-center">
              테스트 메인 이동 버튼
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const stlyes = StyleSheet.create({
  constainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: Colors.light.primary500,
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "bold",
  },
  input_container: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
});
export default LandView;
