import styles from './ContactCard.module.css'
// import UsePricture from '../../assets/user.jpg'
import UserPicture from '../../assets/user.jpg'
import { FaPencilAlt, FaTrashAlt, FaHeart } from 'react-icons/fa';
const ContactCard = (props) => {
    const onEditContact = () => {
        console.log("onEditBtn Click", props.id)

        props.onEditContact(props.id)
    }
    const onDeleteContact = () => {
        console.log("onDeleteBtn Click", props.id)
        props.onDeleteContact(props.id)
    }
    const onFavouritesClick = () => {
        props.onFavouritesClick(props.id);
    }
    return (
        <>
            {
                props.favouritesMode === "false" ?
                    <tr className={styles.row}>
                        <td>
                            <img className={styles.userPicture} src={UserPicture} alt="User Picture" />
                        </td>
                        <td>
                            {props.name}
                        </td>
                        <td>
                            {props.surname}
                        </td>
                        <td>
                            {props.mobileNo}
                        </td>
                        <td className=''>
                            <FaPencilAlt onClick={onEditContact} style={{ marginInline: ".2rem", cursor: "pointer" }} />

                            <FaTrashAlt onClick={onDeleteContact} style={{ marginInline: ".2rem", cursor: "pointer" }} />

                            <FaHeart onClick={onFavouritesClick} style={{ color: props.isFav === "false" ? "" : "red", marginInline: ".2rem", cursor: "pointer" }} />

                        </td>
                    </tr>
                    :
                    <tr >
                        <td>Please add contacts to favourites list</td>
                    </tr>
            }
        </>
    )
}
export default ContactCard