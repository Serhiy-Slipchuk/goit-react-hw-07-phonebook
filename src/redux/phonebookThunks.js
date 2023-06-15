import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from "phonebookAPI";

export const getContactsThunk = createAsyncThunk('phonebook/getContacts',
 async () => {
    const data = await getContacts();
    console.log('thunkdata', data)
    return data;
 });