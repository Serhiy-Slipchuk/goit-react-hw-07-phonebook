import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getContactsThunk } from './phonebookThunks';

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
      .addCase(getContactsThunk.rejected, (state, {error} ) => {
        console.log('obj', error.message)
        state.contacts.isLoading = false;
        state.contacts.error = error.message;
      });
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { updateFilter, addContact, deleteContact } =
  phonebookSlice.actions;
