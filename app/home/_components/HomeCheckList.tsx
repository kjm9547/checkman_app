import { useAuthStore } from "@/store/useAuthStore";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import axios from "axios";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
type createCheckItemType = {
  id: number;
  title?: string;
  period?: string;
  target_period?: string;
  imgUrl?: string;
};
const HomeCheckList = () => {
  const router = useRouter();
  const authStore = useAuthStore();
  const token = authStore.userInfo.token;
  const [checkList, setCheckList] = useState<createCheckItemType[]>([]);
  const getCheckItemList = async () => {
    try {
      const res = await axios.get("http://localhost:3000/checkitem", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 200) {
        setCheckList(res.data);
      }
    } catch {}
  };
  useEffect(() => {
    getCheckItemList();
  }, []);

  const checkItemClickHandler = () => {
    router.push("/checklist/CheckListAddView");
  };
  return (
    <View>
      {checkList.map((v) => {
        return (
          <Pressable key={`user_check_list_${v.id}`} style={styles.card}>
            <Text>{v.title}</Text>
            <Image style={styles.card_img} src={v.imgUrl}></Image>
            <Text>진행율 54%</Text>
          </Pressable>
        );
      })}
      <TouchableOpacity
        className="flex items-center justify-center"
        style={styles.card}
        onPress={checkItemClickHandler}
      >
        <Text>새로운 체크 리스트를 추가하세요</Text>
        <MaterialIcons name="add" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 6,
    marginBottom: 4,
    minHeight: 100,
  },
  card_img: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
});
export default HomeCheckList;
