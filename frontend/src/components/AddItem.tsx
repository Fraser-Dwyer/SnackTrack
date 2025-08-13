import { useState } from 'react';
import styles from './AddItem.module.css'

export default function ItemList({ onAddItem } : { onAddItem : (newItem: string) => void}) {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const handleAdd = () => {
    const trimmed = inputValue.trim();

    if (!trimmed) {
      setError('Item cannot be empty');
      return;
    }
    if (trimmed.length > 20) {
      setError('Item cannot exceed 20 characters');
      return;
    }

    onAddItem(trimmed);
    setInputValue('');
    setError('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item"
        aria-label="item-input"
        className={styles.inputField}
      />
      <button onClick={handleAdd} aria-label="add-button">Add</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
