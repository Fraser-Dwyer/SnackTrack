import ListItem from './components/ListItem'
import { useState, useEffect } from 'react'
import AddItem from './components/AddItem'
import { Item } from './types/Item'
import './App.css'

function App() {
  const [items, setItems] = useState<Item[]>(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleAddItem = (newItem: string) => {
    setItems((prev) => [...prev, {name: newItem, checked: false}])
  }

  const handleDeleteItem = (itemToDelete: string) => {
    setItems(items.filter((item: Item) => item.name !== itemToDelete))
  }

  const handleToggleItem = (itemToToggle: Item) => {
    setItems(items.map((item: Item) => {
      if (item.name === itemToToggle.name) {
        return { ...item, checked: !item.checked };
      }
      return item;
    }))
  }

  return (
    <div className='shoppingListContainer'>
      <h1>Shopping List</h1>
      <div className='itemsContainer'>
        {items.length === 0 ? (
          <p className='informationMsg'>No items on the shopping list - try adding one</p>
        ) : (
          items.map((item) => {
            return <ListItem key={item.name} item={item} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
          })
        )}
      </div>
      <AddItem onAddItem={handleAddItem} items={items} />
    </div>
  )
}

export default App
