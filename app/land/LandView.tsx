import { Colors } from "@/constants/theme";
import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
const LandView = () => {
  const authStore = useAuthStore();

  useEffect(() => {
    console.log("update store", authStore.userInfo);
  }, [authStore]);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    pw: "",
  });
  const loginClickHandler = async () => {
    const res = await axios.post("http://localhost:3000/user/signin", {
      email: formData.email,
      pw: formData.pw,
    });
    if (res.status === 201) {
      router.push("/(tabs)/explore");
      authStore.setUserInfo(res.data);
      console.log("로그인한 유저의 정보입니다.", res.data);
    } else {
      console.log("로그인에 실패하였습니다.", res.data);
    }
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
