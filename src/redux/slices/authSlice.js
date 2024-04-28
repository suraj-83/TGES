import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../config/axiosInstance.js"

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || 'USER',
    data: JSON.parse(localStorage.getItem('user')) || {},
}

export const createAccount = createAsyncThunk('auth/signup', async (data) => {
    try {
        console.log("DATA: ", data)

        const response = axiosInstance.post("/users/register", data)

        toast.promise(response, {
            loading: 'Creating account...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create your account"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const updateProfile = createAsyncThunk('auth/updateProfile', async (data) => {
    try {
        const response = axiosInstance.put("/users/update", data)
        toast.promise(response, {
            loading: 'Updating profile...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to update profile"
        })

        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const changePassword = createAsyncThunk('auth/changePassword', async (data) => {
    try {
        const response = axiosInstance.post("/users/change-password", data)
        toast.promise(response, {
            loading: 'Updating password...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to update password"
        })

        console.log(await response)

        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const getUserData = createAsyncThunk('auth/getUser', async () => {
    try {
        const response = axiosInstance.get("/users/profile")

        return (await response).data;
    } catch (error) {
        toast.error(error?.message)
    }
})

export const login = createAsyncThunk('auth/login', async (data) => {
    try {
        const response = axiosInstance.post("/users/login", data)
        toast.promise(response, {
            loading: 'Authenticating account...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Error Logging In"
        })

        return await response;
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.message)
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        const response = axiosInstance.post("/users/logout")
        toast.promise(response, {
            loading: 'Logging out account...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to Logout your account"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                if (action.payload.status === 200) {
                    localStorage.setItem("user", JSON.stringify(action?.payload?.data?.data));
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("role", action?.payload?.data?.data?.role);
                    state.isLoggedIn = true;
                    state.role = action?.payload?.data?.data?.user?.role;
                    state.data = action?.payload?.data?.data;
                }
            })
            .addCase(logout.fulfilled, (state) => {
                localStorage.clear();
                state.isLoggedIn = false;
                state.role = '';
                state.data = {};
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                console.log(action.payload)
                if (!action?.payload?.data) return;
                localStorage.setItem("user", JSON.stringify(action?.payload?.data));
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("role", action?.payload?.data?.role);
                state.isLoggedIn = true;
                state.role = action?.payload?.data?.role;
                state.data = action?.payload?.data;
            })
    }
})

export default authSlice.reducer;