import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import usersSlice from './usersSlice'
import appointSlice from './appointSlice'
import demandSlice from './demandSlice'
import fileSlice from './fileSlice'
import forumSlice from './forumSlice'

export const store = configureStore({
  reducer: {
    user : userSlice,
    users : usersSlice,
    appoint : appointSlice,
    demand : demandSlice,
    file : fileSlice, 
    forum : forumSlice,
  },
})