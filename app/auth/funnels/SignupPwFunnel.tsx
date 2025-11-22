import { SignupStepProps } from "@/app/types/auth";
import { Colors } from "@/constants/theme";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const SignupPwFunnel = ({ formData, setFormData, next }: SignupStepProps) => {
  const formInputHandler = (type: string, text: string) => {
    setFormData({ ...formData, [type]: text });
  };
  return (
    <View className="flex-1 h-full w-full">
      <Text className="text-3xl font-bold color-white">
        비밀번호를 입력해주세요.
      </Text>
      <TextInput
        label="pw"
        mode="outlined"
        textContentType="password"
        value={formData.pw}
        onChangeText={(text) => formInputHandler("pw", text)}
      />
      <View className="mt-2">
        <Button
          mode="contained"
          buttonColor={Colors.light.black500}
          textColor="white"
          onPress={next}
        >
          확인
        </Button>
      </View>
    </View>
  );
};

export default SignupPwFunnel;
