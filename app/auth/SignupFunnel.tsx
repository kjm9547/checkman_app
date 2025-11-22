import { Colors } from "@/constants/theme";
import { useFunnel } from "@/hooks/useFunnel";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignupStepProps } from "../types/auth";
import SignupEmailAuthFunnel from "./funnels/SignupEmailAuthFunnel";
import SignupEmailInputFunnel from "./funnels/SignupEmailInputFunnel";
import SignupNicknameFunnel from "./funnels/SignupNicknameFunnel";
import SignupPwFunnel from "./funnels/SignupPwFunnel";
import SignupSuccessFunnel from "./funnels/SignupSuccessFunnel";

const SignupFunnel = () => {
  const { StepComponent, next } = useFunnel([
    SignupEmailInputFunnel,
    SignupEmailAuthFunnel,
    SignupPwFunnel,
    SignupNicknameFunnel,
    SignupSuccessFunnel,
  ]);
  const [formData, setFormData] = useState<SignupStepProps["formData"]>({
    email: "",
    emailAuth: "",
    nickName: "",
    pw: "",
    pwCheck: "",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.primary500 }}>
      <StepComponent
        formData={formData}
        setFormData={setFormData}
        next={next}
      />
    </SafeAreaView>
  );
};

export default SignupFunnel;
