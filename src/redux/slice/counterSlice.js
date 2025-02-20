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
            state.count -=1;
        },
        decrementMultiplier :(state,action)=>{
            state.count -= action.payload;
        },
        incrementMultiplier :(state,action)=>{
            state.count += Number(action.payload);
        },
        resetCounter:(state)=>{
            state.count =10;
        }
      }
});
export const {increment,decrement,decrementMultiplier,incrementMultiplier,resetCounter} = counterslice.actions;
export const counterReducer = counterslice.reducer;