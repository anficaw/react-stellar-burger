import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { TUser, TUserone} from "../types";

export const initialState: TUser = {
    user: null,
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
      setUser: (state, action:PayloadAction<TUserone|null>) => {
        state.user = action.payload;
        
      },
      setSentMessage: (state, action:PayloadAction<boolean>) => {
        state.isSentMessage = action.payload;
      }
    }
  });

  export default userSlice.reducer;
  export const { setAuthChecked, setUser, setSentMessage} = userSlice.actions;
   