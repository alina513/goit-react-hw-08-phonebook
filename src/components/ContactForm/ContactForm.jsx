import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import toast from 'react-hot-toast';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const existingContact = contacts.some(contact => contact.name === name);
    if (existingContact) {
      // alert(`Contact with name '${name}' already exists!`);

      const notify = name =>
        toast.error(`Contact with name '${name}' already exists!`);
        notify(name);
      event.target.reset();
      
      return;
    }

    dispatch(addContact({ name, number }));
    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input className={css.input} type="text" name="name" id="name" required />
      <label className={css.label} htmlFor="number">
        Number
      </label>
      <input
        className={css.input}
        type="tel"
        name="number"
        id="number"
        required
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
