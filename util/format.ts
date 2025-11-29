export const dateToYYYYMMDD = (date?: Date | string | number): string => {
  // date가 없으면 현재 날짜를 기본값으로 사용
  const validDate = date ? new Date(date) : new Date();

  // 유효하지 않은 날짜 처리
  if (isNaN(validDate.getTime())) {
    throw new Error("Invalid date input");
  }

  // 날짜를 YYYY-MM-DD 형식으로 변환
  const year = validDate.getFullYear();
  const month = String(validDate.getMonth() + 1).padStart(2, "0");
  const day = String(validDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
