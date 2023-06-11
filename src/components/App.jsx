import css from './App.module.scss';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

const App = function () {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div className={css.phonebookThumb}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactsForm />
        <h2 className={css.heading}>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
};

export default App;
