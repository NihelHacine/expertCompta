import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";


export const getfile = createAsyncThunk ("files/get",async()=> {try {
    let result = axios.get("http://localhost:5000/files/allfiless")
    return result;
} catch (error) {
    console.log(error);
}})

export const addfile = createAsyncThunk ("file/add",async(file)=> {try {
    let result = axios.post("http://localhost:5000/files/upload",file)
    return result;
} catch (error) {
    console.log(error);
}})

export const deletefile = createAsyncThunk ("file/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/file/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})

const initialState={
    filelist:null,
    status:null,
}

export const fileSlice = createSlice({

    name: 'file',
    initialState,
    reducers: {},
    extraReducers:{
      [getfile.pending]:(state) => {
          state.status="pending";
      },
      [getfile.fulfilled]:(state,action) => {
          state.status="fullfilled";
          state.filelist =action.payload.data.file;
      },
      [getfile.rejected]:(state) => {
          state.status="rejected";
      },
      [addfile.pending]:(state) => {
        state.status="pending";
    },
    [addfile.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [addfile.rejected]:(state) => {
        state.status="rejected";
    },

    [deletefile.pending]:(state) => {
        state.status="pending";
    },
    [deletefile.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deletefile.rejected]:(state) => {
        state.status="rejected";
    },
    
    },
  })

  export const { } = fileSlice.actions

export default fileSlice.reducer
