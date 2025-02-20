import { createSlice } from "@reduxjs/toolkit";

const initialState ={count : 10 };

export const counterslice = createSlice({
      name: "counter",
      initialState: initialState,
      reducers : {
        increment :(state)=>{
            state.count+=1;
        },
        decrement :(state)=>{
            state.count1 =1;
        }
      }
});
export const {increment,decrement} = counterslice.actions;
export const counterReducer = counterslice.reducer;