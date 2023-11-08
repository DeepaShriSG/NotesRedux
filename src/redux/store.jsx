import { configureStore } from "@reduxjs/toolkit";
import NotesReducer from "./NotesSlice"


export default configureStore({
    reducer:{
        notes: NotesReducer
    }
})

