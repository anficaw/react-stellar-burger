import orderSlice from "./order-slice";
import {initialState} from "./order-slice";


  const orderStr = "35874";

describe('orderSlice', () =>{
    it('panding test', () =>{
        expect (orderSlice( initialState, {
            type: "order/get/pending",

        })).toEqual({
            order: '0',
            orderisLoad: false,
            errorOrder: '',
        })

        expect (orderSlice( initialState, {
            type: "order/get/pending",

        })).toEqual({
            order: '0',
            orderisLoad: false,
            errorOrder: '',
        })
    })

    it('fulfilled test', () =>{
        expect (orderSlice( initialState, {
            type: "order/get/fulfilled",
            payload: orderStr

        })).toEqual({
            order: orderStr,
            orderisLoad: true,
            errorOrder: '',
        })

        expect (orderSlice( undefined, {
            type: "order/get/fulfilled",
            payload: orderStr

        })).toEqual({
            order: orderStr,
            orderisLoad: true,
            errorOrder: '',
        })


    })

    it('rejected test', () =>{
        expect (orderSlice( initialState, {
            type: "order/get/rejected",            
        })).toEqual({
            order: '0',
            orderisLoad: false,
            errorOrder: "error",
        })

        expect (orderSlice( undefined, {
            type: "order/get/rejected",            
        })).toEqual({
            order: '0',
            orderisLoad: false,
            errorOrder: "error",
        })
    })

 
} )