import styles from './ListItem.module.css'
import { FaRegTrashAlt } from 'react-icons/fa'

function ListItem({ itemName }: { itemName: string }) {
  return (
    <div className={styles.listItemContainer}>
      <p className={styles.shoppingListItem} data-testid='listItem'>
        {itemName}
      </p>
      <button className={styles.deleteButton}>
        <FaRegTrashAlt size={30} />
      </button>
    </div>
  )
}

export default ListItem
