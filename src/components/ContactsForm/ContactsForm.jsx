import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/selectors';
import { addContact } from 'redux/phonebookSlice';
import { nanoid } from 'nanoid';
import css from './ContactsForm.module.scss';

const ContactsForm = function () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsList = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const getExistNames = () => {
    return contactsList.map(({ name }) => name);
  };

  const handlerInputChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    }
    if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
  };

  const handlerSubmitForm = event => {
    event.preventDefault();

    if (!getExistNames().includes(name)) {
      const newContact = {
        id: nanoid(5),
        name,
        number,
      };
      setName('');
      setNumber('');
      dispatch(addContact(newContact));
    } else {
      window.alert(`${name} is already in contacts.`);
    }
  };

  return (
    <form className={css.form} onSubmit={e => handlerSubmitForm(e)}>
      <label>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handlerInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Phone number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handlerInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactsForm;
