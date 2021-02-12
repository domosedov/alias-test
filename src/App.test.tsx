import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Todos } from "@components/Todos";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("render todos", () => {
  render(<Todos />);

  screen.debug();
});
