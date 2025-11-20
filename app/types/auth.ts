export type SignupStepProps = {
  next: () => void;
  formData: {
    email: string;
    emailAuth: string;
    password: string;
    passwordCheck: string;
    nickname: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};
