import css from './Form.module.css';
import { addContact } from 'redux/actions';
import { useDispatch } from 'react-redux';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Wywołujemy generator akcji i przekazujemy tekst zadania dla payload
    // Wysyłamy wynik – akcję utworzenia zadania
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        className={css.formInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Phone</label>
      <input
        className={css.formInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.formBtn}>Add contacts</button>
    </form>
  );
};
