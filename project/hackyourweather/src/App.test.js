import { render, screen } from "@testing-library/react";
import App from "./App";

test("Search component is in the document", () => {
  render(<App />);
  const searchBar = screen.getByText("Weather");
  expect(searchBar).toBeInTheDocument();
});
