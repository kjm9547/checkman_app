import { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type createCheckItemType = {
  title: string;
  period: string;
  target_period: string;
  imgUrl?: string;
};
const CheckListAddView = () => {
  const [formData, setFormData] = useState<createCheckItemType>({
    title: "",
    period: "",
    target_period: "",
    imgUrl: "",
  });
  return (
    <SafeAreaView>
      <Text>???</Text>
    </SafeAreaView>
  );
};

export default CheckListAddView;
