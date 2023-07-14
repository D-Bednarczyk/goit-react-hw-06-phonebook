import css from './app.module.css';
import { Form } from './Form';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export const App = () => {
  return (
    <div className={css.main_div}>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList></ContactList>
    </div>
  );
};
