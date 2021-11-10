import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";
import City from "./components/City";

test("renders tittle attribute", () => {
  render(<Header title="Weather" />);
  const headerElement = screen.getByText(/weather/i);
  expect(headerElement).toBeInTheDocument();
});

test("render Search component", async () => {
  render(<App />);
  const searchComponent = screen.getByText(/Search/i);
  expect(searchComponent).toBeInTheDocument();
});
test("render city component", async () => {
  render(<App />);
  const cityElement = screen.getByText(/h1/i);
  expect(cityElement).toBeInTheDocument();
});
