
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import EditContactModal from "../EditContactModal/EditContactModal";

export default function Contact({ nameContact, numberContact, id }) {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={css.contactWrapper}>
            <div className={css.contactDataWrapper}>
                <p><FaUser className={css.icon} />{nameContact}</p>
                <p><FaPhoneAlt className={css.icon} />{numberContact}</p>
            </div>
            <button className={css.editBtn} onClick={handleOpenModal}>Edit</button>
            <button className={css.deleteBtn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
            <EditContactModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                contactId={id} 
                initialName={nameContact} 
                initialNumber={numberContact} 
            />
        </div>
    );
}

