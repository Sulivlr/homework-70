import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiContact} from '../types';
import axiosApi from '../axiosApi';

export const createContact = createAsyncThunk<void, ApiContact>(
  'contact/create', async (apiContact) => {
  await axiosApi.post('/contacts.json', apiContact);
});