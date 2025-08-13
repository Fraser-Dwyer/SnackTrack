import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AddItem from './AddItem'

describe('ItemInput (unit)', () => {
  test('Calls onAddItem with valid input', () => {
    const mockOnAdd = jest.fn()
    render(<AddItem onAddItem={mockOnAdd} />)

    const input = screen.getByLabelText(/item-input/i)
    const button = screen.getByLabelText(/add-button/i)

    fireEvent.change(input, { target: { value: 'Apples' } })
    fireEvent.click(button)

    expect(mockOnAdd).toHaveBeenCalledWith('Apples')
    expect(mockOnAdd).toHaveBeenCalledTimes(1)
  })

  test('Shows error for empty input', () => {
    const mockOnAdd = jest.fn()
    render(<AddItem onAddItem={mockOnAdd} />)

    const button = screen.getByLabelText(/add-button/i)
    fireEvent.click(button)

    expect(screen.getByText(/cannot be empty/i)).toBeInTheDocument()
    expect(mockOnAdd).not.toHaveBeenCalled()
  })

  test('Shows error for input > 20 chars', () => {
    const mockOnAdd = jest.fn()
    render(<AddItem onAddItem={mockOnAdd} />)

    const input = screen.getByLabelText(/item-input/i)
    fireEvent.change(input, { target: { value: 'a'.repeat(21) } })

    fireEvent.click(screen.getByLabelText(/add-button/i))

    expect(screen.getByText(/cannot exceed 20/i)).toBeInTheDocument()
    expect(mockOnAdd).not.toHaveBeenCalled()
  })
})
