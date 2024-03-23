import { configureStore } from "@reduxjs/toolkit";

import postReducer from '../postSlice/postSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer:{ postReducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})
export default store;



type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector