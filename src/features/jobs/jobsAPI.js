import axios from "../../utils/axios";

export const getJobs= async () =>{
    const response = await axios.get("/jobs")
    return  response.data;
}

export const addJobs= async (data) =>{
    const response = await axios.post("/jobs",data)
    return  response.data;
}

export const removeJobs= async (id) =>{
    const response = await axios.delete(`/jobs/${id}`)
    return  response.data;
}
export const editJobs= async (data) =>{
    console.log(data.id);
    const response = await axios.put(`/jobs/${data.id}`,data)
    return  response.data;
}