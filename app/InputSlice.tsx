import { createSlice } from "@reduxjs/toolkit";

const InputSlice = createSlice({
    name: "inputvalue",
    initialState: {
        inputFilter: "",
    },
    reducers: {
        setFilterInput: (state, action)=>{ 
            state.inputFilter = action.payload
            console.log(action.payload)
            console.log(state.inputFilter)
        }
        
    }
})

export const {setFilterInput} = InputSlice.actions;
export default InputSlice.reducer;
