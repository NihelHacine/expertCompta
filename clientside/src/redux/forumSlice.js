import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";
import Swal from 'sweetalert2';

export const getforum = createAsyncThunk ("forum/get",async()=> {try {
    let result = axios.get("http://localhost:5000/forum/allforum")
    return result;
} catch (error) {
    console.log(error);
}})

export const addforum = createAsyncThunk ("forum/add",async(forum)=> {try {
    let result = axios.post("http://localhost:5000/forum/addforum",forum)
    return result;
} catch (error) {
    console.log(error);
}})

export const deleteforum = createAsyncThunk ("forum/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/forum/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editforum = createAsyncThunk ("forum/update",async({id})=> {try {
    let result = axios.put (`http://localhost:5000/forum/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    forumlist:null,
    status:null,
}

export const forumSlice = createSlice({

  name: 'forum',
  initialState,
  reducers: {},
  extraReducers:{
    [getforum.pending]:(state) => {
        state.status="pending";
    },
    [getforum.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.forumlist =action.payload.data.forum;
    },
    [getforum.rejected]:(state) => {
        state.status="rejected";
    },

    [addforum.pending]:(state) => {
        state.status="pending";
    },
    [addforum.fulfilled]:(state) => {
        state.status="fullfilled";

       
    },
    [addforum.rejected]:(state) => {
        state.status="rejected";
    },

    [deleteforum.pending]:(state) => {
        state.status="pending";
    },
    [deleteforum.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deleteforum.rejected]:(state) => {
        state.status="rejected";
    },

    [editforum.pending]:(state) => {
        state.status="pending";
    },
    [editforum.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editforum.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =forumSlice.actions

export default forumSlice.reducer