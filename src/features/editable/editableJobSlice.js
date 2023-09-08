import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    editablejob:{}
}

const editableJobSlice = createSlice({
    name: "addjobs",
    initialState,
    reducers:{
        ediableJob: (state,action) =>{
            state.editablejob= action.payload;
        }
    }
}
)

export default editableJobSlice.reducer;
export const {ediableJob} = editableJobSlice.actions;