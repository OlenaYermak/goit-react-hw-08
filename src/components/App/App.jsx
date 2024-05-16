// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactForm from "../ContactForm/ContactForm";
// import Loader from "../Loader/Loader";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";

// import { fetchContacts } from "../../redux/contactsOps";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";


// export default function App() {
//   const dispatch = useDispatch();
//   const { error, loading } = useSelector((state) => state.contacts);

//   useEffect(() => { 
//     dispatch(fetchContacts());
//   }, [dispatch]);

//     return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//         <SearchBox />
//         {loading && !error && <Loader />}
//       {error && <ErrorMessage />}
//       <ContactList />
//     </div>
//   );
// }




import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}





