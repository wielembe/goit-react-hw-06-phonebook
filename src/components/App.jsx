import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.titles}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.titles}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
