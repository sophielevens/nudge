import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders correct site title", () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome to nudge/i);
  expect(linkElement).toBeInTheDocument();
});
