import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs ,removeJobs,editJobs,addJobs} from "./jobsAPI";

const initialState ={
    jobs: [],
    isLoading:false,
    isError:false,
    error:""
}

export const fetchJobs = createAsyncThunk(
    "jobs/fetchJobs",
    async () =>{
        const jobs = await getJobs()
        return jobs
    }
)

export const createJobs = createAsyncThunk(
    "jobs/addJobs",
    async (data) =>{
        const job = await addJobs(data)
        return job
    }
)

export const deleteJobs = createAsyncThunk(
    "jobs/deleteJobs",
    async (id) =>{
        const job = await removeJobs(id)
        return job
    }
)
export const updateJobs = createAsyncThunk(

    "jobs/updateJobs",
    async (data) =>{
        const job = await editJobs(data)
        return job
    }
)


const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    extraReducers: (builder) =>{
        //fetchJobs
        //fetchJobs
        builder
        .addCase(fetchJobs.pending,(state) =>{
            state.error =""
            state.isError = false
            state.isLoading = true
        })
        .addCase(fetchJobs.fulfilled,(state,action) =>{
            state.isLoading = false
            state.jobs = action.payload;
        })
        .addCase(fetchJobs.rejected,(state,action) =>{
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
            
        })
        //craeteJobs
        //craeteJobs
        builder
        .addCase(createJobs.pending,(state) =>{
            state.error =""
            state.isError = false
            state.isLoading = true
        })
        .addCase(createJobs.fulfilled,(state,action) =>{
            state.isLoading = false
            state.jobs.push(action.payload)
        })
        .addCase(createJobs.rejected,(state,action) =>{
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
            
        })
        //deleteJobs
        //deleteJobs
        builder
        .addCase(deleteJobs.pending,(state) =>{
            return state
        })
        .addCase(deleteJobs.fulfilled,(state,action) =>{
            state.isLoading = false
            state.jobs = state.jobs.filter(job => job.id !== action.meta.arg) 
            
        })
        .addCase(deleteJobs.rejected,(state,action) =>{
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
            
        })
        //updateJobs
        //updateJobs
        .addCase(updateJobs.pending,(state) =>{
            return state
        })
        .addCase(updateJobs.fulfilled,(state,action) =>{
            const jobIndex = action.payload.findIndex(job => job.id === action.payload.id)
            state.isLoading = false
            state.jobs[jobIndex] =  action.payload
            
        })
        .addCase(updateJobs.rejected,(state,action) =>{
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
            
        })
    }
}
)

export default jobsSlice.reducer;

