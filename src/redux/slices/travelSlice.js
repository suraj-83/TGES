import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../config/axiosInstance.js"

const initialState = {

}

export const trainTravel = createAsyncThunk('travel/train', async (data) => {
    try {
        const response = axiosInstance.post("/travel/train", data)

        toast.promise(response, {
            loading: 'Creating train travel...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create train travel"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const airTravel = createAsyncThunk('travel/air', async (data) => {
    try {
        const response = axiosInstance.post("/travel/air", data)

        toast.promise(response, {
            loading: 'Creating air travel...',
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create air travel"
        })

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const getTravelDetails = createAsyncThunk('travel/getAllDetails', async () => {
    try {
        const response = axiosInstance.get("/travel/travel-details")

        return (await response).data;
    } catch (error) {
        toast.error(error?.message)
    }
})

const travelSlice = createSlice({
    name: 'travel',
    initialState,
    reducers: {},
    extraReducers: () => {
    
    }
})

export default travelSlice.reducer;