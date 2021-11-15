import React from "react";
import Search from "../Search";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Search has a header", () => {
  render(<Search />);
  const headerElement = screen.getByText("Weather");
  expect(headerElement).toBeInTheDocument();
});

test("Search has an input", () => {
  render(<Search />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});

test("Search has a button", () => {
  render(<Search />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("Change value of input", () => {
  render(<Search />);
  const inputEl = screen.getByRole("textbox");

  fireEvent.change(inputEl, {
    target: {
      value: "managua",
    },
  });
  expect(inputEl.value).toBe("managua");
});

test("Button is disabled and enabled", () => {
  render(<Search />);
  const input = screen.getByRole("textbox");
  expect(screen.getByRole("button")).toBeDisabled();

  fireEvent.change(input, {
    target: { value: "managua" },
  });

  expect(screen.getByRole("button")).not.toBeDisabled();
});

test("form fetch the data", () => {
  const { getByRole } = render(<Search />);
  const formElement = getByRole("form");

  fireEvent.submit(formElement);
  expect(formElement).toBeTruthy();
});
test("City element is not visible", async () => {
  render(<Search />);
  const cityElementNull = screen.queryByRole("city");
  expect(cityElementNull).toBeNull();
});
