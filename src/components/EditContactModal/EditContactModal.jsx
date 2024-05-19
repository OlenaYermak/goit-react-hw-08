import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import css from "./EditContactModal.module.css";

Modal.setAppElement("#root");



export default function EditContactModal({ isOpen, onClose, contactId, initialName, initialNumber }) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    number: Yup.string().required("Phone number is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(updateContact({ contactId, newData: values }));
    setSubmitting(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Contact"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <h2>Edit Contact</h2>
      <Formik
        initialValues={{ name: initialName, number: initialNumber }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => ( 
          <Form className={css.form}>
            <div className={css.formField}>
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className={css.errorMsg} />
            </div>
            <div className={css.formField}>
              <label htmlFor="number">Phone Number:</label>
              <Field type="text" name="number" />
              <ErrorMessage name="number" component="div" className={css.errorMsg} />
            </div>
            <div className={css.buttonContainer}>
              <button type="submit" disabled={isSubmitting || !isValid} className={css.saveBtn}> 
                Save
              </button>
              <button type="button" onClick={onClose} className={css.cancelBtn}>
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}