import { useEffect } from 'react';
import css from './ContactsList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  filteredContactsSelector,
  isLoadingSelector,
  errorSelector,
} from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import { getContactsThunk } from 'redux/phonebookThunks';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';

const ContactsList = function () {
  const filteredContacts = useSelector(filteredContactsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const errorMessage = useSelector(errorSelector);

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
