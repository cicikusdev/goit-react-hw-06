import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Add Contact</h2>
          <ContactForm />
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contacts</h2>
          <SearchBox />
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default App;
