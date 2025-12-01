import { Colors } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Chip } from "react-native-paper";
const CheckListPeriodSection = ({ formData, setFormData }: any) => {
  const items = [1, 3, 7, 14];
  const [text, setText] = useState(items[0].toString());
  const [selectedPeriodIndex, setSelectedPeriodIndex] = useState<number>(0);
  const chipClickHandler = (item: number) => {
    const index = items.indexOf(item);
    setSelectedPeriodIndex(index);
    setText(items[index].toString());
  };
  useEffect(() => {
    // TODO 로직 통합 필요
    setFormData({ ...formData, period: text });
  }, [text]);
  return (
    <View>
      <Text className="font-bold text-lg">체크 주기를 입력해주세요.</Text>
      <View className="flex-row items-center gap-1 mb-4 align-middle">
        <MaterialIcons name="info-outline" size={14} />
        <Text className="font-semibold text-sm color-gray-500">
          일정 기간마다 알림으로 체크해드립니다.
        </Text>
      </View>
      <View style={styles.chipContainer}>
        {items.map((item, index) => (
          <Chip
            onPress={() => chipClickHandler(item)}
            showSelectedCheck={false}
            showSelectedOverlay={true}
            selected={selectedPeriodIndex === index}
            key={`period_key_${index}`}
            style={{
              maxWidth: 80,
              height: 32,
              marginBottom: 8,
              borderWidth: 1,
              borderColor:
                selectedPeriodIndex === index
                  ? Colors.light.primary500
                  : "#ccc", // 기본 테두리 색상
              backgroundColor:
                selectedPeriodIndex === index
                  ? Colors.light.primary300
                  : "white", // 기본 배경색
            }}
            textStyle={{}}
          >{`${item}일`}</Chip>
        ))}
      </View>
      <View className="flex flex-row items-center text-lg">
        <TextInput
          style={styles.dateInput}
          placeholder="직접 입력"
          keyboardType="number-pad"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Text className="ml-2 text-sm font-semibold">일 마다 체크합니다.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
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
export default CheckListPeriodSection;
