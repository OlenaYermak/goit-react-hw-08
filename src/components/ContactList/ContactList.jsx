
import Contact from "../Contact/Contact"

import {  useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/filters/selectors";


import css from "./ContactList.module.css"

export default function ContactList() {
    

    
    const showContacts = useSelector(selectFilteredContacts);

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
