import css from './contact.module.css';
import { Contact } from './Contact';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const ContactsArray = useSelector(state => state.contacts);
  const Filter = useSelector(state => state.filter);

  //console.log(Filter);
  const FilteredContacts = ContactsArray.filter(el =>
    el.name.toLowerCase().includes(Filter.filter.toLowerCase())
  );
  //  console.log(FilteredContacts);

  return (
    <ul className={css.contactsItem}>
      {FilteredContacts.map(el => (
        <Contact
          key={el.key}
          id={el.key}
          name={el.name}
          number={el.number}
        ></Contact>
      ))}
    </ul>
  );
};
