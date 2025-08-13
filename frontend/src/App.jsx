import './App.css'
import ListItem from './components/ListItem'

function App() {
  const items = ["Apples", "Pears", "Oranges"]
  return (
    <div className='shoppingListContainer'>
      <h1>Shopping List</h1>
      <div className='itemsContainer'>
        { items.map((item) => {
          return <ListItem itemName={item} />
        })}
      </div>
    </div>
  )
}

export default App