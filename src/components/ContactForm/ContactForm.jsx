import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

import css from "./ContactForm.module.css"

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    number: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number format")
        .required("Required"),
});

export default function ContactForm() { 

    const usernameId = useId();
    const userNumberId = useId();

     const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        const addValue ={
            name: values.name,
            number: values.number,
        };


        dispatch(addContact(addValue));

        
		actions.resetForm();
	};
    
        return (
            <Formik initialValues={{
                name: "",
                number: "",
            }}
                onSubmit={handleSubmit}
            validationSchema={ContactSchema}>
                
                <Form className={css.form}>
                    <div className={css.contactFormFieldWrapper}>
                        <label htmlFor={usernameId}>Name</label>
                    <Field className={css.input} type="text" name="name" id={usernameId} />
                      <ErrorMessage className={css.errorMsg} name="name" component="span" />
                    </div>
                     <div className={css.contactFormFieldWrapper}><label htmlFor={userNumberId}>Number</label>                  
                    <Field className={css.input} type="text" name="number" id={userNumberId} />
                      <ErrorMessage className={css.errorMsg} name="number" component ="span" /></div>
                       
                    <button className={css.addBtn} type="submit">Add contact</button>
                </Form>
    </Formik>
  );
    
}















