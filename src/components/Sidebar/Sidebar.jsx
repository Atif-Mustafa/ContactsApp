import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact, editContact, setFavouritesMode } from '../../slices/contactsSlice';
import { v4 as uuidv4 } from 'uuid'
import styles from './Sidebar.module.css'
import { RiContactsBook2Line } from "react-icons/ri";
import { FaHeart } from 'react-icons/fa';

const Sidebar = () => {
    const dispatch = useDispatch();
    const contactsList = useSelector(state => state.contacts.contactsList)
    const editContactId = useSelector(state => state.contacts.editContactId)
    const favouritesList = useSelector(state => state.contacts.favourites)

    const nameRef = useRef();
    const surnameRef = useRef();
    const mobileNoRef = useRef();


    useEffect(() => {
        if (editContactId) {
            const contactToEdit = contactsList.find(contact => contact.id === editContactId);
            console.log(contactToEdit);
            nameRef.current.value = contactToEdit.name;
            surnameRef.current.value = contactToEdit.surname;
            mobileNoRef.current.value = contactToEdit.mobileNo
        }
    }, [editContactId])
    const onAddContact = (e) => {
        e.preventDefault();
        const contactDetails = {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            mobileNo: mobileNoRef.current.value,
            id: editContactId ? editContactId : uuidv4(),
            isFav: "false"
        }
        if (editContactId) {
            dispatch(editContact(contactDetails))
        } else {
            dispatch(addContact(contactDetails))
        }
        e.target.reset();
    }
    return (
        <aside>
            <div className={styles['all-contacts']} onClick={() => dispatch(setFavouritesMode(false))}>
                <RiContactsBook2Line />
                <div>
                    <h4>All Contacts</h4>
                    <span>{contactsList.length} contacts</span>
                </div>
            </div>
            <div className={styles.favourites} onClick={() => dispatch(setFavouritesMode(true))}>
                <FaHeart />
                <div>
                    <h4>Favourites</h4>
                    <span>{favouritesList.length} contacts</span>
                </div>
            </div>
            <form onSubmit={onAddContact} className={styles.form}>
                <div className={styles.nasu}>
                    <input ref={nameRef} type="text"
                        placeholder="Name" />
                    <input ref={surnameRef} type="text"
                        placeholder="Surname" />
                </div>
                <div>
                    <input ref={mobileNoRef} type="number"
                        placeholder="Mobile No." />
                </div>
                <button type="submit">{editContactId ? "Edit" : "Add"}</button>
            </form>

        </aside>
    )
}

export default Sidebar;