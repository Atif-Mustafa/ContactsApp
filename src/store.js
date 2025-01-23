//to create store this line is imported
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./slices/contactsSlice"
import logger from 'redux-logger'

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        // users: usersReducer
    },
    middleware: (getDefaultMiddlewares) => ([...getDefaultMiddlewares(), logger])

});

// console.log(contactsReducer)
export default store




