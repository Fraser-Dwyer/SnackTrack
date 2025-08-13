import styles from './ListItem.module.css'

function ListItem({ itemName }: { itemName: string }) {
  return (
      <p className={styles.shoppingListItem}>{ itemName }</p>
  )
}

export default ListItem