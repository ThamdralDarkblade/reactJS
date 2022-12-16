import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    counterValue: 20,
    lesson: {
        lection: 10,
        topic: 'Redux Toolkit'
    }
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: defaultState,
    reducers: {
        increaseCounterAction: (state, action) => {
            state.counterValue += Number(action.payload);
        },
        decreaseCounterAction: (state, action) => {
            state.counterValue -= Number(action.payload);
        }
    }
})

export const { increaseCounterAction, decreaseCounterAction } = counterSlice.actions;
export default counterSlice.reducer;