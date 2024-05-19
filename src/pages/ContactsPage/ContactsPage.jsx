import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import  ErrorMessage  from "../../components/ErrorMessage/ErrorMessage";


import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectError, selectContacts } from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
        {contacts.length > 0 && <SearchBox />}
         {loading && !error && <Loader />}
           {error && <ErrorMessage />}
       
      <ContactList />
    </>
  );
}
