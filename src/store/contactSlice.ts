import {ApiContact, FormInfo} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {createContact} from './contactThunk';

export interface ContactState {
  contact: ApiContact[];
  isLoading: boolean;
  isCreating: boolean;
}

const initialState: ContactState = {
  contact: [],
  isLoading: false,
  isCreating: false,
};

export const contactSlice = createSlice<ContactState>({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createContact.pending, (state) => {
      state.isCreating = true;
    }).addCase(createContact.fulfilled, (state) => {
      state.isCreating = false;
    }).addCase(createContact.rejected, (state) => {
      state.isCreating = false;
    });
  }
});

export const contactReducer = contactSlice.reducer;