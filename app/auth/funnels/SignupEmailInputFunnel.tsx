import { SignupStepProps } from "@/app/types/auth";
import { Colors } from "@/constants/theme";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const SignupEmailInputFunnel = ({
  formData,
  setFormData,
  next,
}: SignupStepProps) => {
  const formInputHandler = (type: string, text: string) => {
    setFormData({ ...formData, [type]: text });
  };
  return (
    <View className="flex-1 h-full w-full">
      <Text className="text-3xl font-bold color-white">
        이메일을 입력해주세요.
      </Text>
      <TextInput
        label="Email"
        mode="outlined"
        textContentType="emailAddress"
        value={formData.email}
        onChangeText={(text) => formInputHandler("email", text)}
      />
      <View className="mt-2">
        <Button
          mode="contained"
          buttonColor={Colors.light.black500}
          textColor="white"
          onPress={next}
        >
          인증하기
        </Button>
      </View>
    </View>
  );
};

export default SignupEmailInputFunnel;
