import { createSlice } from "@reduxjs/toolkit";

export const Cart = createSlice({
    name:"Cart",
    initialState:[],
    reducers : {
        add: (state,action)=>{
      state.push(action.payload);
        },
        remove: (state,action)=>{
           return state.filter((item)=>item.id !==action.payload);
        },
    }
})
export const {add,remove} =Cart.actions;
export default Cart.reducer