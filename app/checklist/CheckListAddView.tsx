import { Colors } from "@/constants/theme";
import { useAuthStore } from "@/store/useAuthStore";
import { dateToYYYYMMDD } from "@/util/format";
import axios from "axios";
import { Stack } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import CheckListDateSelector from "./_components/CheckListDateSelector";
import CheckListImageSection from "./_components/CheckListImageSection";
import CheckListPeriodSection from "./_components/CheckListPeriodSection";
import CheckListTitleSection from "./_components/CheckListTitleSection";
type createCheckItemType = {
  title: string;
  period: string;
  target_period: string;
  imgUrl?: string;
  start: string;
  end: string;
};

const today = new Date();
const initStartDate = new Date(today);
const initEndDate = new Date(today);
initEndDate.setDate(today.getDate() + 7);

const CheckListAddView = () => {
  const authStore = useAuthStore();
  const [formData, setFormData] = useState<createCheckItemType>({
    title: "",
    period: "",
    target_period: "",
    imgUrl: "",
    start: dateToYYYYMMDD(initStartDate),
    end: dateToYYYYMMDD(initEndDate),
  });

  const formSubmitHandler = async () => {
    console.log("formData", formData);
    const res = await axios.post("http://localhost:3000/checkitem", formData, {
      headers: {
        Authorization: `Bearer ${authStore.userInfo.token}`,
      },
    });
    console.log("response", res);
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "체크리스트 등록" }} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View>
            <CheckListImageSection
              formData={formData}
              setFormData={setFormData}
            />
            <CheckListTitleSection
              formData={formData}
              setFormData={setFormData}
            />
            <CheckListDateSelector
              formData={formData}
              setFormData={setFormData}
            />
            <CheckListPeriodSection
              formData={formData}
              setFormData={setFormData}
            />
          </View>
          <View>
            <Button
              mode="contained"
              buttonColor={Colors.light.black500}
              textColor="white"
              onPress={formSubmitHandler}
            >
              등록
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,

    padding: 16,
    backgroundColor: "white",
  },
});
export default CheckListAddView;
