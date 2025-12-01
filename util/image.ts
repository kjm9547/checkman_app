import axios from "axios";

export const uploadImageToServer = async (
  image: File | string,
  token: string
) => {
  try {
    const formData = new FormData();

    if (typeof image === "string") {
      formData.append("file", {
        uri: image,
        name: `image_.jpg`,
        type: "image/jpeg",
      } as any);
    } else {
      formData.append(`file`, image);
    }
    console.log("formData", formData);
    // 서버로 요청
    const res = await axios.post(
      "http://localhost:3000/upload/image",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // 필요시 인증 토큰 추가
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("이미지 업로드 실패:", error);
    throw error;
  }
};
