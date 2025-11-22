import { userInfoProps } from "@/app/types/auth";
import { create } from "zustand";
interface AuthStore {
  userInfo: userInfoProps;
  setUserInfo: (info: userInfoProps) => void;
  clearStore: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  userInfo: {},
  setUserInfo: (info) =>
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        ...info,
      },
    })),
  clearStore: () => set(() => ({ userInfo: {} })),
}));
