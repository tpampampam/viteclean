import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface Posts {
    id: number
    title: string
    body: string
    userId: number
}

type State = {
    list: Posts[]
    isLoading: boolean
}

const initialState: State = {
    list: [],
    isLoading: false
}

export const fetchPost = createAsyncThunk(
    'post/fetchPost',
    async(_, {rejectWithValue}) => {
        try{
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts')

            return await resp.json();
        }catch(e) {
            console.log(e)
            rejectWithValue('error')
        }
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        filterPosts: (state, action) => {
           if(!action.payload) return 
           state.list = state.list.filter(({title}) => title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, state => {state.isLoading = true})
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.list= action.payload
                state.isLoading = false
            })
    }
})

const {reducer, actions} = postSlice

export const {filterPosts} = actions

export const postSelector = (state: any) => state.postReducer

export default reducer