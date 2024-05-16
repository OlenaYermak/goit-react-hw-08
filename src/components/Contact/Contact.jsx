import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css"

export default function Contact({ nameContact, numberContact, id }) {
    
    const dispatch = useDispatch();
  

    return (
        <div className={css.contactWrapper}>
            <div className={ css.contactDataWrapper}>
            <p> <FaUser className={css.icon} />{nameContact}</p>
            <p> <FaPhoneAlt className={css.icon} />{numberContact}</p>
            </div>
            <button className={css.deleteBtn} onClick={() => dispatch(deleteContact( id ))} >Delete</button>
            </div>
    );
}









