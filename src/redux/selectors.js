export const contactsSelector = state => state.phonebook.contacts.items;
export const filteredContactsSelector = state => {
  const filteredContacts = state.phonebook.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.phonebook.filter.toLowerCase())
  );
  return filteredContacts;
};
export const filterSelector = state => state.phonebook.filter;
export const isLoadingSelector = state => state.phonebook.contacts.isLoading;
export const errorSelector = state => state.phonebook.contacts.error;
