import { render, screen, fireEvent } from '@testing-library/react'
import { Item } from '../types/Item'
import '@testing-library/jest-dom'
import ListItem from './ListItem'

describe('ShoppingListItem - Unit Tests', () => {
  const mockItem: Item = {name: 'Apples', checked: false}
  const mockOnDelete = jest.fn()
  const mockOnToggle = jest.fn()

  test('Renders the item name', () => {
    render(<ListItem item={mockItem} onDeleteItem={mockOnDelete} onToggleItem={mockOnToggle} />)
    expect(screen.getByText('Apples')).toBeInTheDocument()
  })

  test('calls onDeleteItem with correct item', () => {
    const mockOnDelete = jest.fn()
    render(<ListItem item={mockItem} onDeleteItem={mockOnDelete} onToggleItem={mockOnToggle} />)

    fireEvent.click(screen.getByLabelText(/delete-Apples/i))

    expect(mockOnDelete).toHaveBeenCalledWith('Apples')
    expect(mockOnDelete).toHaveBeenCalledTimes(1)
  })
})
