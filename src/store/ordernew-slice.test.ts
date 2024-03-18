import ordernewSlice from "./ordernew-slice";
import {orderStr} from "../utils/data";

 
  const initialState = {
    order: null,
    orderisLoad: false,
    errorOrder: "",
  };

describe('orderSlice', () =>{
    it('panding test', () =>{
        expect (ordernewSlice( initialState, {
            type: "ordernew/get/pending",

        })).toEqual({
            order: null,
            orderisLoad:false,
            errorOrder:"",
        })

        expect (ordernewSlice( undefined, {
            type: "ordernew/get/pending",

        })).toEqual({
            order: null,
            orderisLoad:false,
            errorOrder:"",
        })
    })

    it('fulfilled test', () =>{
        expect (ordernewSlice( initialState, {
            type: "ordernew/get/fulfilled",
            payload: orderStr

        })).toEqual({
            order: orderStr,
            orderisLoad: true,
            errorOrder: '',
        })

        expect (ordernewSlice( undefined, {
            type: "ordernew/get/fulfilled",
            payload: orderStr

        })).toEqual({
            order: orderStr,
            orderisLoad: true,
            errorOrder: '',
        })


    })

    it('rejected test', () =>{
        expect (ordernewSlice( initialState, {
            type: "ordernew/get/rejected",            
        })).toEqual({
            order: null,
            orderisLoad: false,
            errorOrder: "error",
        })

        expect (ordernewSlice( undefined, {
            type: "ordernew/get/rejected",            
        })).toEqual({
            order: null,
            orderisLoad: false,
            errorOrder: "error",
        })
    })

 
} )