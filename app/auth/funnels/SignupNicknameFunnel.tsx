import { SignupStepProps } from "@/app/types/auth";
import { Colors } from "@/constants/theme";
import axios from "axios";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const SignupNicknameFunnel = ({
  formData,
  setFormData,
  next,
}: SignupStepProps) => {
  const submitClickHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/user/signup",
        formData
      );
      if (res.status === 201) {
        next();
      }
      return;
    } catch (e) {
      console.log(e);
    }
  };
  const formInputHandler = (type: string, text: string) => {
    setFormData({ ...formData, [type]: text });
  };
  return (
    <View className="flex-1 h-full w-full">
      <Text className="text-3xl font-bold color-white">
        닉네임을 입력해주세요.
      </Text>
      <TextInput
        label="nickName"
        mode="outlined"
        textContentType="nickname"
        value={formData.nickName}
        onChangeText={(text) => formInputHandler("nickName", text)}
      />
      <View className="mt-2">
        <Button
          mode="contained"
          buttonColor={Colors.light.black500}
          textColor="white"
          onPress={submitClickHandler}
        >
          확인
        </Button>
      </View>
    </View>
  );
};

export default SignupNicknameFunnel;
