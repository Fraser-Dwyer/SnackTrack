import styles from './ListItem.module.css'
import { FaRegTrashAlt } from 'react-icons/fa'

function ListItem({
  itemName,
  onDeleteItem,
}: {
  itemName: string
  onDeleteItem: (itemName: string) => void
}) {
  return (
    <div className={styles.listItemContainer}>
      <p className={styles.shoppingListItem} data-testid='listItem'>
        {itemName}
      </p>
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteItem(itemName)}
        aria-label='delete-button'
      >
        <FaRegTrashAlt size={30} />
      </button>
    </div>
  )
}

export default ListItem
