import orderSlice from "./order-slice";


const orderState = {
    order: 'string',
    orderisLoad: false,
    errorOrder: 'string',
  }

  const orderStr = "35874";

describe('orderSlice', () =>{
    it('panding test', () =>{
        expect (orderSlice( orderState, {
            type: "order/get/pending",

        })).toEqual({
            order: 'string',
            orderisLoad: false,
            errorOrder: '',
        })

        expect (orderSlice( undefined, {
            type: "order/get/pending",

        })).toEqual({
            order: '0',
            orderisLoad: false,
            errorOrder: '',
        })
    })

    it('fulfilled test', () =>{
        expect (orderSlice( orderState, {
            type: "order/get/fulfilled",
            payload: orderStr

        })).toEqual({
            order: orderStr,
            orderisLoad: true,
            errorOrder: 'string',
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
        expect (orderSlice( orderState, {
            type: "order/get/rejected",            
        })).toEqual({
            order: 'string',
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