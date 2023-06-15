import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  getContactsThunk,
  addNewContactThunk,
  deleteContactThunk,
} from './phonebookThunks';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,

  reducers: {
    updateFilter: (state, { payload }) => {
      state.filter = payload;
    },
    // addContact: (state, { payload }) => {
    //   state.contacts.items = [...state.contacts.items, payload];
    // },
    // deleteContact: (state, { payload }) => {
    //   state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload);
    // },
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload.data;
        state.contacts.error = '';
      })
      .addCase(getContactsThunk.rejected, (state, { error }) => {
        state.contacts.isLoading = false;
        state.contacts.error = error.message;
      })
      .addCase(addNewContactThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addNewContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = [...state.contacts.items, payload.data];
        state.contacts.error = '';
      })
      .addCase(addNewContactThunk.rejected, (state, { error }) => {
        state.contacts.isLoading = false;
        state.contacts.error = error.message;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload.data.id
        );
        state.contacts.error = '';
      })
      .addCase(deleteContactThunk.rejected, (state, { error }) => {
        state.contacts.isLoading = false;
        state.contacts.error = error.message;
      });
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { updateFilter, addContact, deleteContact } =
  phonebookSlice.actions;
