import { useDispatch, useSelector } from 'react-redux';
import ContactCard from '../ContactCard/ContactCard';
import styles from './ContactsTable.module.css'
import { deleteContact, markContactAsFavourite, setEditContactId } from '../../slices/contactsSlice';
// import UserPicture from '../../assets/user.j'



const ContactsTable = () => {

    const dispatch = useDispatch();
    const favouritesMode = useSelector(state => state.contacts.favouritesMode);
    const favouritesList = useSelector(state => state.contacts.favourites)
    const contactsList = useSelector((store) => store.contacts.contactsList);
    // console.log(contactsList)

    const searchKey = useSelector(state => state.contacts.searchKey)
    // console.log(searchKey)

    const onEditContact = (id) => {
        console.log(id);
        dispatch(setEditContactId(id))
    }
    const onDeleteContact = (id) => {
         dispatch(deleteContact(id));
    }
    const onFavouritesClick = (id) => {
        dispatch(markContactAsFavourite(id));
    }
    const filterResults = contact => contact.name.toLowerCase().includes(searchKey.toLowerCase());

    const filteredContacts = searchKey ? contactsList.filter(filterResults) : contactsList
    return (
        <div className={styles["table-container"]}>
            <table className={styles.contactsTable}>
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {!favouritesMode ?
                        filteredContacts.map(contact => <ContactCard key={contact.id} {...contact} onEditContact={onEditContact} 
                        onDeleteContact = {onDeleteContact}
                        onFavouritesClick={onFavouritesClick}
                        favouritesMode = "false"/>)
                        :
                        
                        favouritesList.map(contact => <ContactCard key={contact.id} {...contact} onEditContact={onEditContact} 
                            onDeleteContact = {onDeleteContact}
                            onFavouritesClick={onFavouritesClick} 
                            favouritesMode = "true"/>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ContactsTable;