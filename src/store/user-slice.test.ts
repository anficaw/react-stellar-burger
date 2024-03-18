import userSlice from "./user-slice";
import {setAuthChecked,setUser, setSentMessage} from "./user-slice";

const initialState = {
    user: null,
    isAuthChecked: false,
    isSentMessage: false,
  };

  const Userone = {
    name: "Olga",
    email: "string@gmai.com"
}
  describe("Test userSlice", ()=>{
    it ('Test setAuthChecked', () =>{
       expect (userSlice (initialState, setAuthChecked (true))).toEqual({
        user: null,
        isAuthChecked: true,
        isSentMessage: false,
       });       
       expect (userSlice (undefined, setAuthChecked (true))).toEqual({
        user: null,
        isAuthChecked: true,
        isSentMessage: false,
       });       
    })

    it ('Test setUser', () =>{
        expect (userSlice (initialState, setUser (Userone))).toEqual({
         user: Userone,
         isAuthChecked: false,
         isSentMessage: false,
        });       
        expect (userSlice (undefined, setUser (Userone))).toEqual({
         user: Userone,
         isAuthChecked: false,
         isSentMessage: false,
        });       
     })

     it ('Test setSentMessage', () =>{
        expect (userSlice (initialState, setSentMessage (true))).toEqual({
         user: null,
         isAuthChecked: false,
         isSentMessage: true,
        });       
        expect (userSlice (undefined, setSentMessage (true))).toEqual({
         user: null,
         isAuthChecked: false,
         isSentMessage: true,
        });       
     })

    
})