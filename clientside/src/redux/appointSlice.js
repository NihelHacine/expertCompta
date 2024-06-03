import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";

export const getappoint = createAsyncThunk ("appoint/get",async()=> {try {
    let result = axios.get("http://localhost:5000/appoint/allappoint")
    return result;
} catch (error) {
    console.log(error);
}})
export const addappoint = createAsyncThunk ("appoint/add",async(appoint)=> {try {
    let result = axios.post("http://localhost:5000/appoint/addappoint",appoint)
    return result;
} catch (error) {
    console.log(error);
}})
export const deleteappoint = createAsyncThunk ("appoint/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/appoint/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editappoint = createAsyncThunk ("appoint/update",async({id,editappointment})=> {try {
    let result = axios.put (`http://localhost:5000/appoint/${id}`,editappointment)
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    appointlist:null,
    status:null,
}

export const appointSlice = createSlice({

  name: 'appoint',
  initialState,
  reducers: {},
  extraReducers:{
    [getappoint.pending]:(state) => {
        state.status="pending";
    },
    [getappoint.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.appointlist =action.payload.data.appoint;
    },
    [getappoint.rejected]:(state) => {
        state.status="rejected";
    },

    [addappoint.pending]:(state) => {
        state.status="pending";
    },
    [addappoint.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [addappoint.rejected]:(state) => {
        state.status="rejected";
    },

    [deleteappoint.pending]:(state) => {
        state.status="pending";
    },
    [deleteappoint.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deleteappoint.rejected]:(state) => {
        state.status="rejected";
    },

    [editappoint.pending]:(state) => {
        state.status="pending";
    },
    [editappoint.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editappoint.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =appointSlice.actions

export default appointSlice.reducer