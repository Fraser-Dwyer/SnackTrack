import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

export function addItem(itemName: string) {
  const input = screen.getByLabelText(/item-input/i)
  const addButton = screen.getByLabelText(/add-button/i)

  fireEvent.change(input, { target: { value: itemName } })
  fireEvent.click(addButton)
}
