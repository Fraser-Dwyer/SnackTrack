import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import { useState } from 'react';
import './App.css'

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem: string) => {
    setItems((prev) => [...prev, newItem]);
  };

  return (
    <div className='shoppingListContainer'>
      <h1>Shopping List</h1>
      <div className='itemsContainer'>
        { items.map((item) => {
          return <ListItem itemName={item} />
        })}
      </div>
      <AddItem onAddItem={handleAddItem} />
    </div>
  )
}

export default App