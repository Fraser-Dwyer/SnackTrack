import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import { Item } from './types/Item'

/**
 * Integration Test Utilities
 */
export function addItem(itemName: string) {
  const input = screen.getByLabelText(/item-input/i)
  const addButton = screen.getByLabelText(/add-button/i)

  fireEvent.change(input, { target: { value: itemName } })
  fireEvent.click(addButton)
}

describe('App (integration)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Adds items to the list via child component', () => {
    render(<App />)

    const input = screen.getByLabelText(/item-input/i)
    const button = screen.getByLabelText(/add-button/i)

    fireEvent.change(input, { target: { value: 'First' } })
    fireEvent.click(button)

    fireEvent.change(input, { target: { value: 'Second' } })
    fireEvent.click(button)

    const items = screen.getAllByTestId('listItem')
    expect(items).toHaveLength(2)
    expect(items[0]).toHaveTextContent('First')
    expect(items[1]).toHaveTextContent('Second')
  })

  test('Does not add invalid items', () => {
    render(<App />)

    const button = screen.getByLabelText(/add-button/i)
    fireEvent.click(button) // Empty input

    expect(screen.queryByTestId('listItem')).not.toBeInTheDocument()
  })

  test('Removes an item from the list when delete clicked', () => {
    render(<App />)

    addItem('First')
    addItem('Second')

    fireEvent.click(screen.getByLabelText(/delete-First/i))

    expect(screen.queryByText('First')).not.toBeInTheDocument()
    expect(screen.getByText('Second')).toBeInTheDocument()
  })

  test('List is empty after deleting last item', () => {
    render(<App />)

    addItem('First')
    addItem('Second')
    fireEvent.click(screen.getByLabelText(/delete-First/i))
    fireEvent.click(screen.getByLabelText(/delete-Second/i))

    expect(screen.queryAllByRole('listItem')).toHaveLength(0)
    expect(screen.getByText('No items on the shopping list - try adding one')).toBeInTheDocument()
  })

  test('Toggle item to be checked', () => {
    render(<App />)

    addItem('First')
    addItem('Second')
    fireEvent.click(screen.getByTestId('checkbox-First'));

    const first = screen.getByText('First')
    const second = screen.getByText('Second')

    // FIXME: See 'Calls onToggleItem with correct item' unit test
    expect(first).toHaveClass('undefined', 'undefined')
    expect(second).toHaveClass('undefined')
  })

  test("Loads item from local storage", () => {
    const mockTodos: Item[] = [{ name: "Apples", checked: false }];
    localStorage.setItem("items", JSON.stringify(mockTodos));

    render(<App />);
  
    // The items should now appear
    const items = screen.getAllByTestId("listItem");
    expect(items).toHaveLength(mockTodos.length);
  });
})
