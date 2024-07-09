export const loginValidator = (email, password) => {

    const emailValidate = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email)
    const passwordvlaidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password)
  if (!emailValidate) {
    return "Invalid Email";
  } else if (!passwordvlaidate) {
    return null // TO BYPASS PASSWORD CHECK
    // return "Password should follow the pattern Min 1 uppercase letter. Min 1 lowercase letter. Min 1 special character. Min 1 number. Min 8 characters. Max 30 characters.";
  } else {
    return null;
  }
};
