import { useEffect } from 'react';
import css from './ContactsList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  contactsSelector,
  isLoadingSelector,
  errorSelector,
  filterSelector,
} from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import { getContactsThunk } from 'redux/phonebookThunks';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';

const ContactsList = function () {
  const contacts = useSelector(contactsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const errorMessage = useSelector(errorSelector);
  const filter = useSelector(filterSelector);

  let filteredContacts = [];
  if (contacts.length > 0) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {errorMessage ? (
        <ErrorMessage message={errorMessage} />
      ) : filteredContacts.length > 0 ? (
        <ul className={css.contactsList}>
          {filteredContacts.map(({ id, name, number }) => {
            return <ContactItem key={id} name={name} number={number} id={id} />;
          })}
        </ul>
      ) : (
        <ErrorMessage message={'There is no any contact'} />
      )}
      {}
    </>
  );
};

export default ContactsList;
