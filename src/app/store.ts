import {configureStore} from "@reduxjs/toolkit";
import {contactReducer} from '../store/contactSlice';


export const store = configureStore({
  reducer: {
    contact: contactReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export const AppDispatch = typeof store.dispatch;