import Types from "../types/authTypes";

// LOGIN USER
export const getLoginSuccess = ({ data }) => ({
  type: Types.LOGIN_SUCCESS,
  payload: {
    data,
  },
});
export const createLoginRequest = (formData) => ({
  type: Types.LOGIN_REQUEST,
  payload: formData,
});
export const addLoadingSuccess = () => ({
  type: Types.SET_LOADING,
});
export const authError = () => ({ type: Types.AUTH_ERROR });

// SIGN UP
export const createSignupStudentRequest=(formData)=>({
  type:Types.STUDENT_SIGNUP_REQUEST,
  payload:formData,
});

export const signupStudentsSuccess=({data})=>({
  type:Types.STUDENT_SIGNUP_SUCCESS,
  payload:{
    data,
  },
});
