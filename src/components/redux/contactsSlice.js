import { v4 as uuidv4 } from 'uuid';

import { createSlice } from '@reduxjs/toolkit';

//const storage = localStorage.getItem('state.contacts');

const parsedStorage = JSON.parse(localStorage.getItem('contacts')) || [];
//const parsedStorage = JSON.parse(storage);
const tasksInitialState = [...parsedStorage];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(state));
      },
      prepare(name, number) {
        return {
          payload: {
            id: uuidv4(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
