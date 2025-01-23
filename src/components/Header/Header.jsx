import { useDispatch } from 'react-redux'
import styles from './Header.module.css'
import { setSearchKey } from '../../slices/contactsSlice';
import UserPicture from '../../assets/user.jpg'
const Header = () => {

    const dispatch = useDispatch();
    function onInputChange(e){
        console.log(e.target.value)
        dispatch(setSearchKey(e.target.value))
    }
    return (
         <div className={styles.container}>
            <img src={UserPicture} alt="UserPicture" className={styles.userPicture}/>
            <form >
                <input onChange={onInputChange} type="text" placeholder="Search contact..."/>
                {/* <button>Search</button> */}
            </form>
         </div>
    )
}

export default Header;