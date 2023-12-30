import { configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "./auth/login-slice";
import userLogoutSlice from "./auth/logout-slice";
import userRegisterSlice from "./auth/register-slice";
import userDataSlice from "./query/user-slice";
import uploadImageSlice from "./photos/uploadImageSlice";

const store = configureStore({
  reducer: {
    userLogin: userLoginSlice,
    userLogout: userLogoutSlice,
    userRegister: userRegisterSlice,
    userData: userDataSlice,
    imageUpload: uploadImageSlice,
  },
});

export default store;
