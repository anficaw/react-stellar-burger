import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { TUser, TUserone} from "../types";

const initialState: TUser = {
    user: {
      name:"name",
      email:"email"
    },
    isAuthChecked: false,
    isSentMessage: false,
  };
  
  export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
      setAuthChecked: (state, action:PayloadAction<boolean>) => {
        state.isAuthChecked = action.payload;
      },
      setUser: (state, action:PayloadAction<TUserone>) => {
        state.user = action.payload;
      },
      setSentMessage: (state, action:PayloadAction<boolean>) => {
        state.isSentMessage = action.payload;
      }
    }
  });

  export default userSlice.reducer;
  export const { setAuthChecked, setUser, setSentMessage} = userSlice.actions;
   