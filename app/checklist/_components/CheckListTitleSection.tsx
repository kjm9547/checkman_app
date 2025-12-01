import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CheckListTitleSection = ({ formData, setFormData }: any) => {
  const formTitleInputHandler = (text: string) => {
    setFormData((prev: any) => ({
      ...prev,
      title: text,
    }));
  };
  return (
    <View>
      {/* TODO 드랍리스트 추가 */}
      <Text className="font-bold text-lg">무엇을 체크할까요</Text>
      <View className="flex-row items-center gap-1 mb-2 align-middle">
        <MaterialIcons name="info-outline" size={14} />
        <Text className="font-semibold text-sm color-gray-500">
          간단한 체크 항목을 설정해주세요.
        </Text>
      </View>
      <TextInput
        style={styles.titleInput}
        placeholder="title"
        value={formData.title}
        onChangeText={(text) => formTitleInputHandler(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleInput: {
    width: "100%",
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
export default CheckListTitleSection;
