import React from 'react';
import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { selectVisibleContacts } from '../../redux/selectors';
import css from "./ContactList.module.css"

export const ContactsList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact value={contact} key={contact.id} />
      ))}
    </ul>
  );
};
