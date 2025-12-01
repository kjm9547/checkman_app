import { dateToYYYYMMDD } from "@/util/format";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const CheckListDateSelector = ({ formData, setFormData }: any) => {
  const [showDatePicker, setShowDatePicker] = useState<{
    type: "start" | "end" | null;
  }>({
    type: null,
  });
  const dateChangeHandler = (date: Date | undefined, type: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [type]: dateToYYYYMMDD(date),
    }));
  };
  useEffect(() => {
    const startDate = new Date(formData.start);
    const endDate = new Date(formData.end);
    const diffInMs = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24)); // 일 단위 차이 계산
    setFormData((prev: any) => ({
      ...prev,
      target_period: diffInDays.toString(),
    }));
  }, [formData.start, formData.end]);
  return (
    <View className="mb-4">
      {showDatePicker && (
        <Pressable
          onPress={() => setShowDatePicker({ type: null })}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
          }}
        />
      )}
      <Text className="font-bold text-lg">몇 일 동안 체크할까요</Text>
      <View className="flex-row items-center gap-1 mb-4 align-middle">
        <MaterialIcons name="info-outline" size={14} />
        <Text className="font-semibold text-sm color-gray-500">
          시작일과 종료일을 통해 목표 기간을 설정해주세요.
        </Text>
      </View>
      <View className="relative flex-row  items-center mb-4">
        <Text className="w-[20%]">시작일</Text>
        <TouchableOpacity
          className="flex-row h-8 gap-1 pl-2 pr-2 border-[0.5px] border-stone-200 items-center align-middle"
          onPress={() => setShowDatePicker({ type: "start" })}
        >
          <Text>{formData.start}</Text>
          <MaterialIcons
            name="calendar-today"
            size={12}
            color="black"
            className="self-center"
          />
        </TouchableOpacity>
      </View>
      <View className="relative flex-row  items-center mb-4">
        <Text className="w-[20%]">종료일</Text>
        <TouchableOpacity
          className="flex-row h-8 gap-1 pl-2 pr-2 border-[0.5px] border-stone-200 items-center align-middle"
          onPress={() => setShowDatePicker({ type: "end" })}
        >
          <Text>{formData.end}</Text>
          <MaterialIcons
            name="calendar-today"
            size={12}
            className="self-center"
          />
        </TouchableOpacity>
      </View>

      <View className="flex flex-row items-center text-lg">
        <TextInput
          placeholder="period"
          value={formData.target_period}
          style={styles.dateInput}
          // onChangeText={(text) => setFormData("title", text)}
        />
        <Text className="ml-2 text-sm font-semibold">일 동안 체크합니다.</Text>
      </View>
      {showDatePicker.type &&
        (Platform.OS === "ios" ? (
          <View style={styles.calendar}>
            <DateTimePicker
              mode="date"
              display="inline"
              value={new Date(formData[showDatePicker.type] || Date.now())}
              minimumDate={
                new Date(formData[showDatePicker.type] || Date.now())
              }
              onChange={(_, date) =>
                dateChangeHandler(date, showDatePicker.type!)
              }
            />
          </View>
        ) : (
          <DateTimePicker
            mode="date"
            display="default"
            value={new Date(formData[showDatePicker.type] || Date.now())}
            minimumDate={new Date(formData[showDatePicker.type] || Date.now())}
            onChange={(_, date) =>
              dateChangeHandler(date, showDatePicker.type!)
            }
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    position: "absolute",
    top: 30,
    left: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 1000,
  },
  dateInput: {
    width: "20%",
    height: 30,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 4,
    textAlign: "center",
  },
});
export default CheckListDateSelector;
