import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios' ; 

//get all users
export const getusers = createAsyncThunk("users/get", async() => {
    try {
        let result = axios.get("http://localhost:5000/user/allusers");
        return result ; 
    } catch (error) {
        console.log(error);
    }
});


const initialState = {
    users: null, 
    status:null,
  
}



    
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    
      },

    extraReducers : {
//all 
[getusers.pending] : (state) => {
    state.status = "pending" ;
},
[getusers.fulfilled] : (state, action) => {
    state.status = "fullfilled";
    state.users = action.payload.data.users;
},
[getusers.rejected] : (state) => {
    state.status = "rejected" 
},
  
    },
  });

  export const {  } = usersSlice.actions

  export default usersSlice.reducer
