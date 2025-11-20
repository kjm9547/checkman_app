import { SignupStepProps } from "@/app/types/auth";
import { Colors } from "@/constants/theme";

import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const SignupSuccessFunnel = ({
  formData,
  setFormData,
  next,
}: SignupStepProps) => {
  const router = useRouter();
  const homeBtnClcikHandler = () => {
    router.push("/land/LandView");
  };
  return (
    <View className="flex-1 h-full w-full">
      <Text className="text-3xl font-bold color-white">
        가입에 성공하였습니다.
      </Text>

      <View className="mt-2">
        <Button
          mode="contained"
          buttonColor={Colors.light.black500}
          textColor="white"
          onPress={homeBtnClcikHandler}
        >
          확인
        </Button>
      </View>
    </View>
  );
};

export default SignupSuccessFunnel;
