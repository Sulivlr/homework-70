import { ApiContact } from '../types';
import { createSlice } from '@reduxjs/toolkit';
import { createContact, fetchContact } from './contactThunk';

export interface ContactState {
  contact: ApiContact[];
  isFetching: boolean;
  isCreating: boolean;
  modalOpen: boolean;
  contactId: string | null;
}

const initialState: ContactState = {
  contact: [],
  isFetching: false,
  isCreating: false,
  modalOpen: false,
  contactId: null,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    openModal: (state, {payload: action}) => {
      state.modalOpen = true;
      state.contactId = action;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.contactId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createContact.pending, (state) => {
      state.isCreating = true;
    }).addCase(createContact.fulfilled, (state) => {
      state.isCreating = false;
    }).addCase(createContact.rejected, (state) => {
      state.isCreating = false;
    }).addCase(fetchContact.pending, (state) => {
      state.isFetching = true;
    }).addCase(fetchContact.fulfilled, (state, { payload: contact }) => {
      state.isFetching = false;
      state.contact = contact;
    }).addCase(fetchContact.rejected, (state) => {
      state.isFetching = false;
    });
  },
  selectors: {
    selectContactIsCreating: (state) => state.isCreating,
    selectContactAreFetching: (state) => state.isFetching,
    selectContacts: (state) => state.contact,
    selectModalOpen: (state) => state.modalOpen,
    selectContactId: (state) => state.contactId,
  }
});

export const contactReducer = contactSlice.reducer;
export const {
  openModal,
  closeModal,
} = contactSlice.actions;

export const {
  selectContactIsCreating,
  selectContactAreFetching,
  selectContacts,
  selectModalOpen,
  selectContactId
} = contactSlice.selectors;
