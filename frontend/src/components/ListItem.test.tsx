import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ListItem from './ListItem'

describe('ShoppingListItem - Unit Tests', () => {
  const mockItem = 'Apples'

  it('Renders the item name', () => {
    render(<ListItem itemName={mockItem} />)
    expect(screen.getByText('Apples')).toBeInTheDocument()
  })
})
