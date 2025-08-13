import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App (integration)', () => {
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

    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })
})
