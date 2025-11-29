import { useAuthStore } from "@/store/useAuthStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRouter } from "expo-router";

type loginInput = {
  email: string;
  pw: string;
};
export const useAuth = () => {
  const authStore = useAuthStore();
  const router = useRouter();
  const getUserTokenFromStorage = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      return token;
    } else {
      return false;
    }
  };
  const autoLogin = async () => {
    // TODO 토큰을 통한 유저 정보 가져오기 이후 메인 이동 토큰이 있는경우에만 처리
    const token = await getUserTokenFromStorage();
    if (token) {
      const res = await axios.get("http://localhost:3000/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        authStore.setUserInfo(res.data);
        router.push("/(tabs)/explore");
      }
    }
  };

  const loginUser = async (data: loginInput) => {
    const res = await axios.post("http://localhost:3000/user/signin", data);
    try {
      if (res.status === 201) {
        const token = res.data.accessToken;
        await AsyncStorage.setItem("token", token);
        authStore.setUserInfo(res.data);
      }
    } catch {}
  };
  const logoutUser = () => {
    authStore.clearStore();
    AsyncStorage.removeItem("token");
  };
  return {
    getUserTokenFromStorage,
    autoLogin,
    loginUser,
    logoutUser,
  };
};
