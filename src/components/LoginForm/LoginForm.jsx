import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Required"),
});


export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(reponse => {
       
        toast.success("Success!!!");
      })
      .catch(error => {
        
        toast.error("No such user exists.")
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
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
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
