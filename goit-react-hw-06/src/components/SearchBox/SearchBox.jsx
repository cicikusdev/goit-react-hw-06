import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label className={styles.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={styles.input}
        type="text"
        id="search"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
