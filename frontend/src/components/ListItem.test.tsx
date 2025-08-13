import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";
import '@testing-library/jest-dom'

describe("ShoppingListItem - Unit Tests", () => {
  const mockItem = "Apples"

  it("renders the item name", () => {
    render(<ListItem itemName={mockItem} />);
    expect(screen.getByText("Apples")).toBeInTheDocument();
  });

})