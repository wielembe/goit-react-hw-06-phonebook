import { contactsFilter } from './constants';
import { createSlice } from '@reduxjs/toolkit';

const storage = localStorage.getItem('state.contacts');
const parsedStorage = JSON.parse(storage);
const tasksInitialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem('state.contacts', JSON.stringify(state));
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem('state.contacts', JSON.stringify(state));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
