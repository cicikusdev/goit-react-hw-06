import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (contacts.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No contacts yet. Add your first contact!</p>
      </div>
    );
  }

  if (filteredContacts.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No contacts found matching "{filter}"</p>
      </div>
    );
  }

  return (
    <div className={styles.contactList}>
      <h3 className={styles.title}>
        Contacts ({filteredContacts.length})
      </h3>
      <div className={styles.list}>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
