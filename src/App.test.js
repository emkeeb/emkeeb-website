import { render, screen } from "@testing-library/react";
import App from "./App";

test("render emkeeb website", () => {
  render(<App />);
  const MainNameTitle = screen.getByTestId("main-name-title");
  expect(MainNameTitle).toBeInTheDocument();
});
