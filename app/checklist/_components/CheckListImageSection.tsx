import CmImagePicker from "@/components/CmImagePicker";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, View } from "react-native";

const CheckListImageSection = ({ formData, setFormData }: any) => {
  return (
    <View>
      <Text className="font-bold text-lg">
        체크리스트 이미지를 선택해주세요.
      </Text>
      <View className="flex-row items-center gap-1 mb-4 align-middle">
        <MaterialIcons name="info-outline" size={14} />
        <Text className="font-semibold text-sm color-gray-500">
          체크리스트를 대표하는 이미지를 선택해주세요.?
        </Text>
      </View>
      <View style={styles.image_picker_container}>
        <CmImagePicker
          onPick={(uri) => {
            setFormData({ ...formData, imgUrl: uri });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image_picker_container: {
    width: "50%",
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: "8",
  },
});
export default CheckListImageSection;
