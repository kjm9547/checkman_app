import { useAuthStore } from "@/store/useAuthStore";
import { uploadImageToServer } from "@/util/image";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, View } from "react-native";

type CmImagePicker = {
  onPick: (uri: string) => void; // 이미지 선택 후 처리할 콜백 함수
  mediaTypes?: ImagePicker.MediaTypeOptions; // 허용할 미디어 타입 (기본값: images)
  allowsEditing?: boolean; // 편집 허용 여부 (기본값: true)
  aspect?: [number, number]; // 편집 시 비율 (기본값: [4, 3])
  quality?: number; // 이미지 품질 (기본값: 1)
  placeholder?: string; // 기본 이미지 또는 텍스트
  style?: object; // 외부에서 스타일 지정
};

export default function CmImagePicker({
  onPick,
  mediaTypes = ImagePicker.MediaTypeOptions.Images,
  allowsEditing = true,
  aspect = [4, 3],
  quality = 1,
  placeholder = "이미지를 선택하세요",
  style = {},
}: CmImagePicker) {
  const [image, setImage] = useState<string | null>(null);
  const authStore = useAuthStore();
  const token = authStore.userInfo.token;
  const pickImage = async () => {
    // 권한 요청
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "권한 필요",
        "미디어 라이브러리에 접근하려면 권한이 필요합니다."
      );
      return;
    }

    // 이미지 선택
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes,
      allowsEditing,
      aspect,
      quality,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const res = await uploadImageToServer(uri, token);

      setImage(res.url); // 로컬 상태에 이미지 저장
      onPick(res.url); // 선택된 이미지 URI를 콜백으로 전달
    }
  };

  return (
    <Pressable style={[styles.container, style]} onPress={pickImage}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <MaterialIcons name="image-search" size={20} />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  placeholder: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  placeholderText: {
    color: "#aaa",
    fontSize: 16,
  },
});
