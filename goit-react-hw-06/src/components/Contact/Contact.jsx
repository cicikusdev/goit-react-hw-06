import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <span className={styles.name}>{contact.name}</span>
        <span className={styles.number}>{contact.number}</span>
      </div>
      <button 
        className={styles.button} 
        type="button" 
        onClick={handleDelete}
        aria-label={`Delete ${contact.name}`}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
