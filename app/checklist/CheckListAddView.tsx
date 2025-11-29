import { Colors } from "@/constants/theme";
import { dateToYYYYMMDD } from "@/util/format";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CheckListDateSelector from "./_components/CheckListDateSelector";
type createCheckItemType = {
  title: string;
  period: string;
  target_period: string;
  imgUrl?: string;
};
const today = new Date();
const initStartDate = today;
const initEndDate = today;
initEndDate.setDate(today.getDate() + 7);
const CheckListAddView = () => {
  const [formData, setFormData] = useState<createCheckItemType>({
    title: "",
    period: "",
    target_period: "",
    imgUrl: "",
  });
  const [date, setDate] = useState({
    start: dateToYYYYMMDD(initStartDate),
    end: dateToYYYYMMDD(initEndDate),
  });

  const formInputHandler = (type: string, text: string) => {
    setFormData({ ...formData, [type]: text });
  };
  const dateChangeHandler = (date: Date | undefined, type: string) => {
    setDate((prev) => ({
      ...prev,
      [type]: dateToYYYYMMDD(date),
    }));
  };
  useEffect(() => {
    console.log(date);
  }, [date]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Text>대충 이미지 뷰</Text>
        <Text>무엇을 체크할까요?</Text>
        <TextInput
          placeholder="title"
          value={formData.title}
          onChangeText={(text) => formInputHandler("title", text)}
        />
        <Text>체크 간격을 정해주세요.</Text>
        <TextInput
          placeholder="title"
          value={formData.title}
          onChangeText={(text) => formInputHandler("title", text)}
        />

        <Text>몇 일 동안 체크할까요</Text>
        <TextInput
          placeholder="period"
          value={formData.title}
          onChangeText={(text) => formInputHandler("title", text)}
        />
        <Text>start date</Text>
        <TextInput keyboardType="number-pad" />
        <DateTimePicker
          mode="date"
          value={new Date()}
          minimumDate={today}
          onChange={(_, date) => dateChangeHandler(date, "start")}
        />
        <Text>end date</Text>
        <View>
          <DateTimePicker
            mode="date"
            value={new Date()}
            minimumDate={new Date(date.start)}
            onChange={(_, date) => dateChangeHandler(date, "end")}
          />
          <Text>{date.end} 까지 체크합니다.</Text>
          <CheckListDateSelector />
        </View>
        <View>
          <Button
            mode="contained"
            buttonColor={Colors.light.black500}
            textColor="white"
          >
            등록
          </Button>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});
export default CheckListAddView;
