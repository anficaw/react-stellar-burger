import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthChecked: false,
    isSentMessage: false
  };
  
  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setAuthChecked: (state, action) => {
        state.isAuthChecked = action.payload;
      },
      setUser: (state, action) => {
        state.user = action.payload;
      },
      setSentMessage: (state, action) => {
        state.isSentMessage = action.payload;
      }
    }
  });
  
  export const { setAuthChecked, setUser, setSentMessage} = userSlice.actions;
  
  export default userSlice.reducer;
  