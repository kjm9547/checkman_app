export type SignupStepProps = {
  next: () => void;
  formData: {
    email: string;
    emailAuth: string;
    pw: string;
    pwCheck: string;
    nickName: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export type userInfoProps = {
  id?: number;
  email?: string;
  nickName?: string;
  type?: string;
  imgUrl?: string;
  token: string;
};
