import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import css from "./RegistrationForm.module.css";


const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    
    dispatch(register(values))
      .unwrap()
      .then(response => {
        toast.success("Registration successful!");
       
      })
      .catch(error => {
        toast.error("User with this name already exists.");
      });
    actions.resetForm();
  };


 

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={RegistrationSchema}
      onSubmit={handleSubmit}
    >
   
<Form className={css.form} autoComplete="off">
        <label className={css.label}>
         Username
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.errorMsg} />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className={css.errorMsg} />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className={css.errorMsg} />
        </label>
        <button type="submit">Register</button>
      </Form>


    </Formik>
  );
}
