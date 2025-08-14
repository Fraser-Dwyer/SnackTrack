import { Item } from '../types/Item'
import * as styles from './ListItem.module.css'
import { FaRegTrashAlt } from 'react-icons/fa'

function ListItem({
  item,
  onDeleteItem,
  onToggleItem
}: {
  item: Item
  onDeleteItem: (itemName: string) => void,
  onToggleItem: (item: Item) => void
}) {
  return (
    <div className={styles.listItemContainer}>
      <input className={styles.checkbox} type="checkbox" checked={item.checked} onChange={(e) => onToggleItem(item)}
        data-testid={`checkbox-${item.name}`}
      />
      <p className={`${styles.shoppingListItem} ${item.checked ? styles.itemCrossed : ''}`} data-testid='listItem'>
        {item.name}
      </p>
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteItem(item.name)}
        aria-label={`delete-${item.name}`}
      >
        <FaRegTrashAlt size={30} />
      </button>
    </div>
  )
}

export default ListItem
