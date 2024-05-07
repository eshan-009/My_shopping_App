import { createSlice } from "@reduxjs/toolkit";

export const Loggedin = createSlice({
    name:"Loggedin",
    initialState: {value: false},
    reducers : {
       login : (state)=> {state.value = true}
        },
    
})
export const {login} =Loggedin.actions;
export default Loggedin.reducer