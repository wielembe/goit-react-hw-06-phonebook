import { useState, useEffect } from 'react';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../Filter/Filter';

import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(localContacts);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  //   console.log(contacts);
  // }, [contacts]);

  const addContact = newContact => {
    const isOnList = contacts.find(contact => contact.name === newContact.name);

    if (isOnList) {
      window.alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevcontacts => [newContact, ...prevcontacts]);
    }
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const deleteContact = id =>
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );

  return (
    <div>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm onSubmit={addContact}></ContactForm>
      <h2>Contacts</h2>
      <ContactFilter filter={filter} getFilter={addFilter}></ContactFilter>
      <ContactList
        contacts={filterContacts}
        deleteContact={deleteContact}
      ></ContactList>
    </div>
  );
};
