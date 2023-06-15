import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from 'phonebookAPI';

export const getContactsThunk = createAsyncThunk(
  'phonebook/getContacts',
  async () => {
    const data = await getContacts();
    return data;
  }
);

export const addNewContactThunk = createAsyncThunk(
  'phonebook/addNewContact',
  async newContact => {
    const data = await addContact(newContact);
    return data;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'phonebook/deleteContact',
  async id => {
    const data = await deleteContact(id);
    return data;
  }
);
