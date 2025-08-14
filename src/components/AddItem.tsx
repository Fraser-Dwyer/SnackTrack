import styles from './AddItem.module.css'
import { Item } from '../types/Item'
import { useState } from 'react'

export default function ItemList({
  items,
  onAddItem,
}: {
  items: Item[]
  onAddItem: (newItem: string) => void
}) {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const handleAdd = () => {
    const trimmed = inputValue.trim()

    if (!trimmed) {
      setError('Item cannot be empty')
      return
    }
    if (trimmed.length > 20) {
      setError('Item cannot exceed 20 characters')
      return
    }

    if (items.some((item: Item) => item.name === trimmed)) {
      setError('Item already on the list')
      return
    }

    onAddItem(trimmed)
    setInputValue('')
    setError('')
  }

  return (
    <>
      <div className={styles.addItemContainer}>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Enter item'
          aria-label='item-input'
          className={styles.inputField}
        />
        <button onClick={handleAdd} aria-label='add-button' className={styles.addButton}>
          Add Item
        </button>
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </>
  )
}
