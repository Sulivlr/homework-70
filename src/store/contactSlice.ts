import {ApiContact} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {createContact, fetchContact} from './contactThunk';

export interface ContactState {
  contact: ApiContact[];
  isFetching: boolean;
  isCreating: boolean;
}

const initialState: ContactState = {
  contact: [],
  isFetching: false,
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
    }).addCase(fetchContact.pending, (state) => {
      state.isFetching = true;
    }).addCase(fetchContact.fulfilled, (state, action) => {
      state.isFetching = false;
      state.contact = action.payload;
    }).addCase(fetchContact.rejected, (state) => {
      state.isFetching = false;
    });
  },
  selectors: {
    selectContactIsCreating: (state) => state.isCreating,
    selectContactAreFetching: (state) => state.isFetching,
    selectContacts: (state) => state.contact,
  }
});

export const contactReducer = contactSlice.reducer;
export const {
  selectContactIsCreating,
  selectContactAreFetching,
  selectContacts
} = contactSlice.selectors;