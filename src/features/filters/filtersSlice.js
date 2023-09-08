import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    jobType:"",
    search:"",
    sort:""
}

const filtersSlice = createSlice({
    name: "addjobs",
    initialState,
    reducers:{
        filterByType: (state,action) =>{
            state.jobType = action.payload
        },
        filterBySearch: (state,action) =>{
            state.search = action.payload
        },
        filterBySort: (state,action) =>{
            state.sort = action.payload
        }
    }
}
)

export default filtersSlice.reducer;
export const {filterByType,filterBySearch,filterBySort} = filtersSlice.actions;