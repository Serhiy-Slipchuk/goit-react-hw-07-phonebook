import css from './ContactsList.module.scss';
import { useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = function () {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className={css.contactsList}>
        {filteredContacts.map(({ id, name, number }) => {
          return <ContactItem key={id} name={name} number={number} id={id} />;
        })}
      </ul>
    </>
  );
};

export default ContactsList;
