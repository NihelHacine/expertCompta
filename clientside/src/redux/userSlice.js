import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios' ; 
import Swal from 'sweetalert2'



//register
export const userRegister = createAsyncThunk("user/register", async(user) => {
    try {
        let reponse = axios.post("http://localhost:5000/user/register", user);
        return reponse ; 
    } catch (error) {
        console.log(error);
    }
})

//login 
export const userLogin = createAsyncThunk("user/login", async(user) => {
    try {
        let reponse = axios.post("http://localhost:5000/user/login", user);
        return reponse ; 
    } catch (error) {
        console.log(error);
    }
});

//current user
export const userCurrent = createAsyncThunk("user/current", async() => {
    try {
        let reponse = axios.get("http://localhost:5000/user/current", {headers: {
            Authorization : localStorage.getItem("token"),
        }});
        return reponse ; 
    } catch (error) {
        console.log(error);
    }
});

export const userEdit = createAsyncThunk("user/update", async({id, edituser}) => {
    try {
        let result = axios.put(`http://localhost:5000/user/${id}`, edituser);
        return result ; 
    } catch (error) {
        console.log(error);
    }
});


//delete user
export const removeuser = createAsyncThunk("user/delete", async(id) => {
    try {
        let result = axios.delete(`http://localhost:5000/user/${id}`);
        return result ; 
    } catch (error) {
        console.log(error);
    }
})
const initialState = {
    user: null, 
    status:null,
  
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout : (state) => {
        state.user = null;
        state.status = null;
        localStorage.removeItem("token");
    },
  },
  extraReducers : {
//register
    [userRegister.pending] : (state) => {
        state.status = "pending" ;
    },
    [userRegister.fulfilled] : (state, action) => {
        state.status = "fullfilled";
        Swal.fire("Merci pour votre inscription !");      
        state.user = action.payload.data.newUserToken;
        localStorage.setItem ("token",action.payload.data.token);
    },
    [userRegister.rejected] : (state) => {
        state.status = "rejected" 
    },
//login
[userLogin.pending] : (state) => {
    state.status = "pending" ;
},
[userLogin.fulfilled] : (state, action) => {
    state.status = "fullfilled";
    state.user = action.payload.data.user;
    localStorage.setItem ("token",action.payload.data.token);
},
[userLogin.rejected] : (state) => {
    state.status = "rejected" ;
    Swal.fire("Vérifier vos données");      
    },
//current
[userCurrent.pending] : (state) => {
    state.status = "pending" ;
},
[userCurrent.fulfilled] : (state, action) => {
    state.status = "fullfilled";
    state.user = action.payload.data.user;
},
[userCurrent.rejected] : (state) => {
    state.status = "rejected" 
},

//delete
[removeuser.pending] : (state) => {
    state.status = "pending" 
},
[removeuser.fulfilled] : (state) => {
    state.status = "fullfilled";
},
[removeuser.rejected] : (state) => {
    state.status = "rejected" 
},
  },
})

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions

export default userSlice.reducer

//const salt = 10 ; 
// const gensalt = await bcrypt.genSalt(salt);
// const hashedpassword = await bcrypt.hash(password,gensalt);
// newuser.password = hashedpassword ;