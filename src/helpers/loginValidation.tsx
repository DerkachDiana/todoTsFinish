export const passwordValidation = (pass: string, requireLength: number): boolean => {
  return pass.length === requireLength;
};

export const loginValidation = (mail: string): boolean => {
  return (/\w+@[a-z]+\.+[a-z]/).test(mail);
};
