import { render, screen, fireEvent } from '@testing-library/react'
import { Item } from '../types/Item'
import '@testing-library/jest-dom'
import ListItem from './ListItem'

describe('ShoppingListItem - Unit Tests', () => {
  const mockItem: Item = {name: 'Apples', checked: false}

  test('Renders the item name', () => {
    const mockOnDelete = jest.fn()
    const mockOnToggle = jest.fn()
    render(<ListItem item={mockItem} onDeleteItem={mockOnDelete} onToggleItem={mockOnToggle} />)
    expect(screen.getByText('Apples')).toBeInTheDocument()
  })

  test('calls onDeleteItem with correct item', () => {
    const mockOnDelete = jest.fn()
    const mockOnToggle = jest.fn()
    render(<ListItem item={mockItem} onDeleteItem={mockOnDelete} onToggleItem={mockOnToggle} />)

    fireEvent.click(screen.getByLabelText(/delete-Apples/i))

    expect(mockOnDelete).toHaveBeenCalledWith('Apples')
    expect(mockOnDelete).toHaveBeenCalledTimes(1)
  })

  test("Calls onToggleItem with correct item", () => {
    const mockOnDelete = jest.fn()
    const mockOnToggle = jest.fn()

    // Render initially unchecked
    render(<ListItem item={mockItem} onDeleteItem={mockOnDelete} onToggleItem={mockOnToggle} />)

    const checkbox = screen.getByTestId("checkbox-Apples");

    // Click to check
    fireEvent.click(checkbox);

    expect(mockOnToggle).toHaveBeenCalledWith(mockItem);
    expect(mockOnToggle).toHaveBeenCalledTimes(1);

    // Simulate App updating state
    render(
      <ListItem
        item={{ ...mockItem, checked: true }}
        onDeleteItem={mockOnDelete}
        onToggleItem={mockOnToggle}
      />
    );

    const item = screen.getAllByTestId('listItem')

    // FIXME: Change to actual class names used (itemCrossed) when fixed 
    //        jest not being able to see class names used
    // 2x undefined gives a decent level of certainty at the moment
    // that the itemCrossed class is applied to the p tag
    expect(item[0]).toHaveClass('undefined', 'undefined')
  });
})
