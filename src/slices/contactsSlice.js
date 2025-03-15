import { createSlice } from "@reduxjs/toolkit";


const initState = {
    contactsList: [
        {
            name: "Alex",
            surname: "D",
            mobileNo: "9562130456",
            id: "a7773676-d4cb-4f84-bd0c-52b18a35e57c",
            isFav: "false"
        },
        {
            name: "John",
            surname: "Wan",
            mobileNo: "8754123698",
            id: "a7773676-d4cb-4f84-bd0c-52b18a35e57d",
            isFav: "false"
        },
    ],
    editContactId: "",
    searchKey: "",
    favourites: [],
    favouritesMode: false
}


//createSlice takes three things
//1.name of the slice
//2.initial state(define all the variables with their default values)
//3.reducers -it will take an object
const contactSlice = createSlice({
    name: "CONTACTS",
    initialState: initState,
    reducers: {
        addContact: (state, action) => {
            //The mutation of original state is not done, it looks like mutation but behind the scene a copy is created by toolkit
            state.contactsList.push(action.payload)
        },
        editContact: (state, action) => {
            const index = state.contactsList.findIndex(contact => contact.id === state.editContactId)
            state.contactsList.splice(index, 1, action.payload);
            state.editContactId = ""
        },
        deleteContact: (state, action) => {
            // console.log(action.payload)
            const index = state.contactsList.findIndex((contact) => contact.id === action.payload);
            state.contactsList.splice(index, 1);
            const favouritesIndex = state.favourites.findIndex((contact) => contact.id === action.payload);
            state.favourites.splice(favouritesIndex, 1)

     },
        markContactAsFavourite: (state, action) => {
            // console.log(state.contactsList)
            const index = state.contactsList.findIndex((contact) => contact.id === action.payload);
            // console.log(state.contactsList[index].isFav)
            if (state.contactsList[index].isFav === "false") {
                console.log("in false")
                state.contactsList[index].isFav = "true";
                state.favourites.push({ ...state.contactsList[index] })
            }
            else {
                state.contactsList[index].isFav = "false";
                const favouritesIndex = state.favourites.findIndex((contact) => contact.id === action.payload);
                state.favourites.splice(favouritesIndex, 1)
            }
        },
        setEditContactId: (state, action) => {
            state.editContactId = action.payload;
        }
        , setSearchKey: (state, action) => {
            state.searchKey = action.payload
        },
        setFavouritesMode: (state, action) => {
            state.favouritesMode = action.payload;
        }
    }

})

// addContact(), editContact()... are functions for operations that we do using switch cases in reducer

console.log(contactSlice)
export const { addContact, editContact, deleteContact, markContactAsFavourite, setEditContactId, setSearchKey, setFavouritesMode } = contactSlice.actions;
export default contactSlice.reducer;