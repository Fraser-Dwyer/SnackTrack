import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([])

  const handleAddItem = (newItem: string) => {
    setItems((prev) => [...prev, newItem])
  }

  const handleDeleteItem = (itemToDelete: string) => {
    setItems(items.filter((item) => item !== itemToDelete))
  }

  return (
    <div className='shoppingListContainer'>
      <h1>Shopping List</h1>
      <div className='itemsContainer'>
        {items.length === 0 ? (
          <p className='informationMsg'>No items on the shopping list - try adding one</p>
        ) : (
          items.map((item) => {
            return <ListItem key={item} itemName={item} onDeleteItem={handleDeleteItem} />
          })
        )}
      </div>
      <AddItem onAddItem={handleAddItem} items={items} />
    </div>
  )
}

export default App
