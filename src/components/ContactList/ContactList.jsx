
import Contact from "../Contact/Contact"

import {  useSelector } from "react-redux";
import { useEffect } from "react";
import { selectFilteredContacts } from "../../redux/filters/selectors";
// import { fetchContacts } from "../../redux/contacts/operations";

// import { selectFilteredContacts } from "../../redux/contactsSlice";
// import { fetchContacts } from "../../redux/contactsOps";

import css from "./ContactList.module.css"

export default function ContactList() {
    // const dispatch = useDispatch();

    
    const showContacts = useSelector(selectFilteredContacts);

    console.log(showContacts);

    
    
     useEffect(() => {
    console.log("showContacts:", showContacts);
  }, [showContacts]);

    return (
        <ul className={css.contactList}>
            {showContacts.map((contact) => (
                <li className={css.contactContainer} key={contact.id}>
                    <Contact nameContact={contact.name} numberContact={contact.number} id={contact.id} />
                </li>
            ))}
        </ul>
    );
}
