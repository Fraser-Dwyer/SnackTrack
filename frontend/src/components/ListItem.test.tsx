import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ListItem from './ListItem'

describe('ShoppingListItem - Unit Tests', () => {
  const mockItem = 'Apples'
  const mockOnDelete = jest.fn()

  test('Renders the item name', () => {
    render(<ListItem itemName={mockItem} onDeleteItem={mockOnDelete} />)
    expect(screen.getByText('Apples')).toBeInTheDocument()
  })

  test('calls onDeleteItem with correct item', () => {
    const mockOnDelete = jest.fn()
    render(<ListItem itemName={'Apples'} onDeleteItem={mockOnDelete} />)

    fireEvent.click(screen.getByLabelText(/delete-Apples/i))

    expect(mockOnDelete).toHaveBeenCalledWith('Apples')
    expect(mockOnDelete).toHaveBeenCalledTimes(1)
  })
})
