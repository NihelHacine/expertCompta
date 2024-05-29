import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from"axios";
import Swal from 'sweetalert2';

export const getdemand = createAsyncThunk ("demand/get",async()=> {try {
    let result = axios.get("http://localhost:5000/demand/alldemand")
    return result;
} catch (error) {
    console.log(error);
}})

export const adddemand = createAsyncThunk ("demand/add",async(demand)=> {try {
    let result = axios.post("http://localhost:5000/demand/adddemand",demand)
    return result;
} catch (error) {
    console.log(error);
}})

export const deletedemand = createAsyncThunk ("demand/delete",async(id)=> {try {
    let result = axios.delete (`http://localhost:5000/demand/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
export const editdemand = createAsyncThunk ("demand/update",async({id})=> {try {
    let result = axios.put (`http://localhost:5000/demand/${id}`)
    return result;
} catch (error) {
    console.log(error);
}})
const initialState={
    demandlist:null,
    status:null,
}

export const demandSlice = createSlice({

  name: 'demand',
  initialState,
  reducers: {},
  extraReducers:{
    [getdemand.pending]:(state) => {
        state.status="pending";
    },
    [getdemand.fulfilled]:(state,action) => {
        state.status="fullfilled";
        state.demandlist =action.payload.data.demand;
    },
    [getdemand.rejected]:(state) => {
        state.status="rejected";
    },

    [adddemand.pending]:(state) => {
        state.status="pending";
    },
    [adddemand.fulfilled]:(state) => {
        state.status="fullfilled";
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Votre demande a été enregistré",
            showConfirmButton: false,
            timer: 2000
          });

       
    },
    [adddemand.rejected]:(state) => {
        state.status="rejected";
    },

    [deletedemand.pending]:(state) => {
        state.status="pending";
    },
    [deletedemand.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [deletedemand.rejected]:(state) => {
        state.status="rejected";
    },

    [editdemand.pending]:(state) => {
        state.status="pending";
    },
    [editdemand.fulfilled]:(state) => {
        state.status="fullfilled";
       
    },
    [editdemand.rejected]:(state) => {
        state.status="rejected";
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { } =demandSlice.actions

export default demandSlice.reducer