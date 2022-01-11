import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {User} from "./reducer"
import {toast} from "react-toastify"

export const sFetchUserInDebug = createAsyncThunk(
        "users/debug",
        async (_, thunkAPI) => {
          // thunkAPI.dispatch(sActionUser.reset())
          // toast.info("Fetching users",)
          return await axios.get("/debug")
                  .then(response => {
                    // toast.success("Success fetching users",)
                    return response.data as User
                  })
                  .catch(error => {
                    toast.error(error.response.data.errorMsg)
                    return thunkAPI.rejectWithValue(error)
                  })
        }
)

export const sAddUser = createAsyncThunk(
        "users/adduser",
        async (requestBody: User, thunkAPI) => {
          toast.info("Adding user",)
          return await axios.post("/keys", requestBody)
                  .then(response => {
                    toast.success("Success add user",)
                    return response.data as User
                  })
                  .catch(error => {
                    toast.error(error.response.data.errorMsg)
                    return thunkAPI.rejectWithValue(error)
                  })
        }
)

export const sEditUser = createAsyncThunk(
        "users/edituser",
        async (payload: any, thunkAPI) => {
          return await axios.put("/keys/" + payload.key, payload.form)
                  .then(response => {
                    toast.success("Success edit user",)
                    return response.data as User
                  })
                  .catch(error => {
                    toast.error(error.response.data.errorMsg)
                    return thunkAPI.rejectWithValue(error)
                  })
        }
)

export const sDeleteUser = createAsyncThunk(
        "users/deleteuser",
        async (obj: any, thunkAPI) => {
          return await axios.delete("/keys/" + obj.key)
                  .then(response => {
                    if (obj.is_toast) toast.success("Success delete user",)
                    return response.data as User
                  })
                  .catch(error => {
                    if (obj.is_toast) toast.error(error.response.data.errorMsg)
                    return thunkAPI.rejectWithValue(error)
                  })
        }
)