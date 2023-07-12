import css from './contact.module.css';
import { Contact } from './Contact';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const ContactsArray = useSelector(state => state.contacts);

  return (
    <ul className={css.contactsItem}>
      {ContactsArray.map(el => (
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
