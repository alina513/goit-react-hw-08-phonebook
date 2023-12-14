import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm.jsx';
import { Filter } from '../components/Filter/Filter.jsx';
import { ContactsList } from '../components/ContactsList/ContactList.jsx';
import { fetchContacts } from '../redux/operations.js';
import { selectIsLoading } from '../redux/selectors.js';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader.jsx';
import { selectError } from '../redux/selectors.js';
import { selectContacts } from '../redux/selectors.js';


const styles = {
  title: {
    fontWeight: 600,
    fontSize: 30,
    textAlign: 'center',
  },
};

export default function ContactsIn() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const contacts = useSelector(selectContacts);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <div>
        <h1 style={styles.title}>Phonebook</h1>
      <Toaster />
      <ContactForm />
      {isLoading && !error && <Loader />}
      {contacts.length!==0 &&(<>
      <h2 style={styles.title}>Contacts</h2>
      <Filter />
      <ContactsList /></>)}
      </div>
    );
  }
