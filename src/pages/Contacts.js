import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactForm } from '../components/ContactForm/ContactForm.jsx';
import { Filter } from '../components/Filter/Filter.jsx';
import { ContactsList } from '../components/ContactsList/ContactList.jsx';
import { fetchContacts } from '../redux/operations.js';
import { selectIsLoading } from '../redux/selectors.js';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader.jsx';
import { selectError } from '../redux/selectors.js';

export default function ContactsIn() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        <h1>Phonebook</h1>
      <Toaster />
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <Loader />}
      <Filter />
      <ContactsList />
      </>
    );
  }
