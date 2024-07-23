import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiContact, ApiContacts, Contact} from '../types';
import axiosApi from '../axiosApi';
import {RootState} from '../app/store';

export const createContact = createAsyncThunk<void, ApiContact>(
  'contact/create', async (apiContact) => {
  await axiosApi.post('/contacts.json', apiContact);
});

export const fetchContact = createAsyncThunk<Contact[], void>(
  'contact/fetch', async () => {
  const {data: contacts} = await axiosApi.get<ApiContacts | null>('/contacts.json');
  if (contacts === null) {
    return [];
  }

  return Object.keys(contacts).map((id) => ({
    id,
    ...contacts[id],
  }));
});